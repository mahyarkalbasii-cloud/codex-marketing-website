import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const partsDir = 'data/raw/xlsx-base64-parts';
const outputPath = 'data/raw/Categories 1405 final.xlsx';
const parts = readdirSync(partsDir)
  .filter((name) => name.endsWith('.b64') || name.includes('.b64.part'))
  .sort();

if (parts.length === 0) {
  throw new Error(`No base64 parts found in ${partsDir}`);
}

const base64 = parts
  .map((name) => readFileSync(join(partsDir, name), 'utf8').trim())
  .join('');

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, Buffer.from(base64, 'base64'));
console.log(`Reconstructed ${outputPath} from ${parts.length} part files.`);
