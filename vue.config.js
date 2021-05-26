const { version, author } = require('./package.json'); // eslint-disable-line

process.env.VUE_APP_COPY_YEAR = String(new Date().getFullYear());
process.env.VUE_APP_VERSION = version;
process.env.VUE_APP_AUTHOR_NAME = author.name;

const mobileApp = process.env.TARGET_APP_PLATFORM === 'cordova';

const config = {
  transpileDependencies: ['vuetify']
};

function genHTMLInjections(scripts) {
  const preload = [];
  const links = [];
  const ts = new Date().getTime();

  for (const sc of scripts) {
    preload.push(`<link href="${sc}?ts=${ts}" rel="preload" as="script">\n`);
    links.push(`<script type="text/javascript" charset="utf-8" src="${sc}?ts=${ts}"></script>\n`);
  }

  return { preload, links };
}

function genCDNInjections() {
  return [
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" />',
    '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css" />'
  ];
}

if (mobileApp) {
  const scripts = ['cordova.js', 'cordova_plugins.js'];

  config.publicPath = '';
  config.outputDir = 'cordova/www';
  config.chainWebpack = cfg => {
    cfg.plugin('html').tap(args => {
      const { preload, links } = genHTMLInjections(scripts);

      args[0].preloadCordova = preload.join('');
      args[0].cordovaScripts = links.join('');

      return args;
    });
  };
} else {
  config.chainWebpack = cfg => {
    cfg.plugin('html').tap(args => {
      args[0].preloadCordova = genCDNInjections().join('');

      return args;
    });
  };
}

module.exports = config;
