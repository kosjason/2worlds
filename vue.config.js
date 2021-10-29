module.exports = {
  publicPath: "./",
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      sass: {
        data:
          `@import "@/assets/scss/main.scss";`

      }
    }
  }
};
