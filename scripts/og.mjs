// Gera public/og.png (imagem de compartilhamento) a partir de scripts/og.svg
import sharp from 'sharp';
await sharp('scripts/og.svg').png({ compressionLevel: 9 }).toFile('public/og.png');
console.log('public/og.png gerado');
