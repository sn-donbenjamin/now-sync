const fetch = require('node-fetch');
const merge = require('lodash/merge');
const { parseConfigFile } = require('./config');

function generateBaseOptions() {
  const auth = parseConfigFile(true);
  const baseOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  if (auth) {
    baseOptions.headers.Authorization = `Basic ${auth.key}`;
  }

  return baseOptions;
}

function get(url, opts) {
  const options = merge({}, generateBaseOptions(), opts);
  options.method = 'GET';

  if (typeof fetch === 'function') {
    return fetch(url, options)
      .then( stream => stream.json() );
  }

  throw new Error('fetch isn’t a function?!');
}
exports.get = get;

function put(url, opts) {
  const options = merge({}, generateBaseOptions(), opts);
  options.method = 'PUT';

  if (typeof fetch === 'function') {
    return fetch(url, options)
      .then( stream => stream.json() );
  }

  throw new Error('fetch isn’t a function?!');
}
exports.put = put;
