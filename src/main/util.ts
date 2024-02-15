/* eslint import/prefer-default-export: off */
import { URL } from 'url';
import path from 'path';
import fs from 'fs';

const appPath =
  process.env.NODE_ENV === 'production' ? process.resourcesPath : __dirname;

const settingsFileName = 'settings.json'
const coursesDataFileName = 'courses.json'

const defaultSettings = {
  hasFrame: true,
  menuResolution: [780, 560],
  courseResolution: [1920, 1080],
  fontSize: 26,
  courseScroll: 0,
}

export function resolveHtmlPath(htmlFileName: string) {
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 1212;
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }

  return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
}

function readJson(fileName: string): JSON {
  const data = fs.readFileSync(path.join(appPath, fileName), {
      encoding: 'utf8',
  });
  return JSON.parse(data.toString());
}

function updateJson(data: Object, fileName: string) {
  const currentData = readJson(fileName);
  fs.writeFileSync( path.join(appPath, fileName),
    JSON.stringify({
      ...currentData,
      ...data,
    })
  );
}

function writeJson(data: Object, fileName: string) {
  fs.writeFileSync( path.join(appPath, fileName),
    JSON.stringify({
      ...data,
    })
  );
}

export function initializeSettings() {
  try {
    fs.openSync(path.join(appPath, settingsFileName), 'r');
  } catch (e) {
    console.log("Error opening settings, creating new. Message: " + e)
    writeJson(defaultSettings, settingsFileName)
  }
}

export function readSettings() {
  const data = fs.readFileSync(path.join(appPath, settingsFileName), {
    encoding: 'utf8',
  });
  return JSON.parse(data.toString());
}

export function updateSettings(data: Object) {
  updateJson(data, settingsFileName)
}

export function initializeCoursesFile() {
  try {
    fs.openSync(path.join(appPath, coursesDataFileName), 'r');
  } catch (e) {
    console.log("Error opening courses info, creating new. Message: " + e)
    writeJson({}, coursesDataFileName)
  }
}

export function readCourseData(courseId: string): JSON {
  const data = readJson(coursesDataFileName)
  // @ts-ignore
  return data[courseId];
}

export function updateCourseData(data: Object, courseId: string) {
  const currentData = readJson(coursesDataFileName)
  // @ts-ignore
  writeJson({[courseId]: { ...currentData[courseId], ...data }}, coursesDataFileName)
}

