import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const src = path.resolve('public/logo.webp')
const publicDir = path.resolve('public')
const appDir = path.resolve('app')

async function run() {
  const buf = fs.readFileSync(src)
  const meta = await sharp(buf).metadata()
  console.log(`Source: ${meta.width}x${meta.height} ${meta.format}`)

  // Make a square version (pad to square with transparent background) for favicon use
  const size = Math.max(meta.width, meta.height)
  const square = await sharp(buf)
    .resize(size, size, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png()
    .toBuffer()

  // Output favicons at various sizes
  const sizes = [16, 32, 48, 180, 192, 512]
  for (const s of sizes) {
    const out = path.join(publicDir, `favicon-${s}.png`)
    await sharp(square).resize(s, s).png().toFile(out)
    console.log(`Wrote ${out}`)
  }

  // Apple touch icon
  await sharp(square).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'))
  console.log('Wrote apple-touch-icon.png')

  // Overwrite app/icon.png as proper PNG (Next.js file convention)
  await sharp(square).resize(512, 512).png().toFile(path.join(appDir, 'icon.png'))
  console.log('Wrote app/icon.png (proper PNG)')

  // favicon.ico (multi-size ICO using to-ico)
  // For ICO, we'll create a 32x32 PNG and just save it as favicon.ico
  // Most browsers accept PNG with .ico extension, but for proper ICO we'd need to-ico
  // Simpler approach: use png-to-ico
  try {
    const pngToIco = (await import('png-to-ico')).default
    const ico16 = await sharp(square).resize(16, 16).png().toBuffer()
    const ico32 = await sharp(square).resize(32, 32).png().toBuffer()
    const ico48 = await sharp(square).resize(48, 48).png().toBuffer()
    const ico = await pngToIco([ico16, ico32, ico48])
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico)
    console.log('Wrote favicon.ico (multi-size ICO)')
  } catch (e) {
    console.log('png-to-ico not available, using PNG as favicon.ico:', e.message)
    const ico32 = await sharp(square).resize(32, 32).png().toBuffer()
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico32)
  }
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
