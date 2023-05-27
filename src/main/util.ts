/* eslint import/prefer-default-export: off */
import { URL } from 'url';
import path from 'path';
import fs from 'fs';

const appPath =
  process.env.NODE_ENV === 'production'
    ? `${process.resourcesPath}`
    : __dirname;

export function resolveHtmlPath(htmlFileName: string) {
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 1212;
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }

  return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
}

export async function writeJson(data: Object) {
  const currentData = await readJson();
  fs.writeFile(
    path.join(appPath, 'localstorage.json'),
    JSON.stringify({
      ...currentData,
      ...data,
    }),
    (err) => {
      if (err) throw err;
      console.log('Saved!');
    }
    );
}

export function readJson() {

  // const data = await fsp.readFile(
  //   path.join(__dirname, '../localstorage.json'),
  //   { encoding: 'utf8' })

  const data = fs.readFileSync(
    path.join(appPath, 'localstorage.json'),
    { encoding: 'utf8' })
  return JSON.parse(data.toString());
}
export function setupJson() {
  const data = {
    courseCompletion: 0,
    task1: {
      completed: false,
      bestTime: 0,
      tries: 0,
    },
    task2: {
      completed: false,
      bestTime: 0,
      tries: 0,
    },
    task3: {
      completed: false,
      bestTime: 0,
      tries: 0,
    }
  };

  fs.open(path.join(appPath, 'localstorage.json'), 'r', (err) => {
      if (err) {
        fs.writeFile(path.join(appPath, 'localstorage.json'),
          JSON.stringify(data), function (err) {
            if (err) throw err;
          });
      }
  })
}
