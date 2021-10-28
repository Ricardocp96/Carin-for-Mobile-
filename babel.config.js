module.exports = function(api) {
  api.cache(true);
  return {
    plugins: ['react-native-reanimated/plugin',"module:react-native-dotenv"],
    presets: ['babel-preset-expo'],
    
  };
};
