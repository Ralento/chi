const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

// Get the default config
const config = getDefaultConfig(__dirname);

// Add Node.js polyfills
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  stream: require.resolve('stream-browserify'),
  crypto: require.resolve('crypto-browserify'),
  http: require.resolve('@tradle/react-native-http'),
  https: require.resolve('https-browserify'),
  os: require.resolve('os-browserify/browser'),
  fs: require.resolve('react-native-level-fs'),
  path: require.resolve('path-browserify'),
  zlib: require.resolve('browserify-zlib'),
};


// Apply NativeWind configuration
module.exports = withNativeWind(config, { input: './global.css' });