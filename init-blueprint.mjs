import fs from 'fs';
import { exit } from 'process';

import projectPackage from './package.json';

const cordovaPackage = {
  name: projectPackage.apkName,
  displayName: projectPackage.displayName,
  version: projectPackage.version,
  description: projectPackage.description,
  main: 'index.js',
  scripts: {
    test: 'echo "Error: no test specified" && exit 1'
  },
  keywords: ['ecosystem:cordova'],
  author: projectPackage.author,
  license: projectPackage.license,
  devDependencies: {
    'cordova-android': '^9.0.0',
    'cordova-plugin-screen-orientation': '^3.0.2',
    'cordova-plugin-whitelist': '^1.3.4',
    'es6-promise-plugin': '^4.2.2'
  },
  cordova: {
    plugins: {
      'cordova-plugin-whitelist': {},
      'cordova-plugin-screen-orientation': {}
    },
    platforms: []
  }
};

try {
  fs.writeFileSync('./cordova/package.json', JSON.stringify(cordovaPackage, undefined, 2));
} catch (e) {
  console.error('could not write a generated cordova/package.json file by the reason', e);
  exit(1);
}

const configTemplate = fs
  .readFileSync('./cordova-config.xml.tpl')
  .toString()
  .replace(/{{APK_NAME}}/g, projectPackage.apkName)
  .replace(/{{DISPLAY_NAME}}/g, projectPackage.displayName)
  .replace(/{{DESCRIPTION}}/g, projectPackage.description)
  .replace(/{{AUTHOR_NAME}}/g, projectPackage.author.name)
  .replace(/{{AUTHOR_EMAIL}}/g, projectPackage.author.email)
  .replace(/{{AUTHOR_URL}}/g, projectPackage.author.url);

try {
  fs.writeFileSync('./cordova/config.xml', configTemplate);
} catch (e) {
  console.error('could not write a generated cordova/config.xml file by the reason', e);
  exit(1);
}

try {
  fs.mkdirSync('./cordova/www');
} catch (e) {
  // ignore if exists
}

console.log(
  'The blueprint initialization has been complete.\nRun`npm run cordova:init:android` to initialize an Android plaform.'
);
