import debug from 'debug';

/**Remember to set env var DEBUG=app:* in development and others depending on env */
export const logger = {
  info: debug('app:info'),
  warn: debug('app:warn'),
  error: debug('app:error'),
  debug: debug('app:Debug'),
};
