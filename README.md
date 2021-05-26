# vue-cordova-blueprint

A blueprint for Vue projects with cordova integrations. This blueprint contains Vue, Vue Composition API, Vue Router, Vuetify, SASS and TypeScript configurations.

## Installation

1. Clone the repo: `github.com/Devoter/vue-cordova-blueprint`
2. Rename the directory and change dir: `mv vue-cordova-blueprint my-project && cd my-project`
3. Change the origin repo: `git remote set-url origin <my-project-origin-repo-url>`
4. Install dependencies: `npm ci`
5. Set your own values of the next properies of `package.json` file
   - name
   - displayName
   - description
   - apkName
   - license
   - version
   - author.email
   - author.name
   - author.url
6. Initialize the blueprint: `npm run init:blueprint`
7. Complete cordova initialization `npm run cordova:init:android`

## Building for Web

If you want to build a simple webapp, just use traditional Vue cli scripts like `npm run lint`, `npm run serve` or `npm run build`. To create a debug build call `npm run build:dev`.

## Building for Mobile

Before build the mobile app you **must create** your own `cordova-env` file (see `cordova-env.example`) with out own values. That file would not be saved into the repo to protect your private data.

### Production build

```sh
npm run cordova:build:android
```

### Development build

```sh
npm run cordova:build:dev
```

## Run previously built application

By default, this command uses a read device, connected via abd tool.

```sh
npm run cordova:run:android
```

## Make a development build an run

```
npm run cordova:debug:android
```

### Signification

To sign APK file - call `sign` script via `npm run sign` or `./sign.sh`

## Icons

I'm sure, you want to use your own icons for you application. It is realy easy to do, just replace images in `cordova/res/icon/android`, but remember to keep original sizes.
