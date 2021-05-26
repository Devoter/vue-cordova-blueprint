export const VERSION = String(process.env.VUE_APP_VERSION);
export const COPY_YEAR = String(process.env.VUE_APP_COPY_YEAR);
export const AUTHOR_NAME = String(process.env.VUE_APP_AUTHOR_NAME);
export const MOBILE_APP = process.env.TARGET_APP_PLATFORM === 'cordova';
export const API_ROOT = String(process.env.VUE_APP_API_ROOT);
