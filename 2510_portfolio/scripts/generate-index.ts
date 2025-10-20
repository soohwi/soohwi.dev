/**
 * generate-index.ts
 * 각 폴더마다 index.ts 자동 생성 스크립트
**/

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_DIR = path.resolve(__dirname, '../src/components');

const generateIndex = (dirPath: string) => {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  const exportStatements: string[] = [];

  items.forEach((item) => {
    if (item.isDirectory()) {
      const componentName = item.name;
      const componentPath = `./${componentName}/${componentName}`;
      exportStatements.push(`export { default as ${componentName} } from '${componentPath}';`);
    }
  });

  const indexPath = path.join(dirPath, 'index.ts');
  fs.writeFileSync(indexPath, exportStatements.join('\n'), 'utf8');
};

generateIndex(TARGET_DIR);
