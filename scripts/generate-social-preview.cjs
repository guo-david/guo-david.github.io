// Run from the repository root: node scripts/generate-social-preview.cjs
const path = require('node:path');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const fontfile = path.join(root, 'public/fonts/manrope.ttf');
const width = 1200;
const height = 630;

async function label(text, size, left, top, color = '#252a22', weight = '') {
  const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const input = await sharp({
    text: {
      text: `<span foreground="${color}">${escaped}</span>`,
      font: `Manrope ${weight} ${size}`.trim(),
      fontfile,
      rgba: true,
      dpi: 72,
    },
  })
    .png()
    .toBuffer();
  const dimensions = await sharp(input).metadata();
  if (left + dimensions.width > width - 60 || top + dimensions.height > height - 24) {
    throw new Error(`Social preview text exceeds its safe area: ${text}`);
  }
  return { input, left, top };
}

async function main() {
  const portraitPath = path.join(root, 'public/me.png');
  const portraitSize = await sharp(portraitPath).metadata();
  const portrait = await sharp(portraitPath)
    .extract({
      left: Math.round(portraitSize.width * 0.125),
      top: Math.round(portraitSize.height * 0.22),
      width: Math.round(portraitSize.width * 0.75),
      height: Math.round(portraitSize.height * 0.72),
    })
    .resize(274, 350)
    .composite([
      {
        input: Buffer.from(
          '<svg xmlns="http://www.w3.org/2000/svg" width="274" height="350"><rect width="274" height="350" rx="8" fill="white"/></svg>'
        ),
        blend: 'dest-in',
      },
    ])
    .png()
    .toBuffer();
  const background =
    Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <rect width="1200" height="630" fill="#faf9f5"/>
    <rect x="32" y="32" width="1136" height="566" rx="12" fill="none" stroke="#c8cebe"/>
    <path d="M72 123H1128" stroke="#343c2d" stroke-width="2"/>
    <rect x="129" y="91" width="8" height="8" fill="#654390"/>
    <rect x="72" y="418" width="720" height="144" rx="8" fill="#eff2e8"/>
    <rect x="72" y="418" width="4" height="144" rx="2" fill="#654390"/>
    <rect x="846" y="176" width="290" height="366" rx="12" fill="#eff2e8" stroke="#c8cebe"/>
  </svg>`);
  const layers = await Promise.all([
    label('DG', 30, 72, 70, '#252a22', 'Bold'),
    label('UNIVERSITY OF TORONTO', 18, 836, 80, '#56604f'),
    label('David Guo', 86, 68, 162),
    label('AI Researcher (MASc)', 34, 72, 271, '#654390'),
    label('University of Toronto MIE · D3M Lab', 26, 72, 326),
    label('Supervised by Prof. Scott Sanner', 22, 72, 370, '#56604f'),
    label('Interactive AI systems', 24, 96, 438),
    label('Conversational recommendation · User modeling', 24, 96, 480),
    label('Spatial & conversational memory', 24, 96, 522),
    label('guo-david.github.io', 16, 72, 577, '#56604f'),
  ]);
  await sharp(background)
    .composite([...layers, { input: portrait, left: 854, top: 184 }])
    .png()
    .toFile(path.join(root, 'public/social-preview.png'));
  console.log(`Generated public/social-preview.png (${width} × ${height}).`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
