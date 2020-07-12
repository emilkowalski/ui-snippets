const cssRequire = require.context("!raw-loader!./", true, /.css$/);

const exported = {};

cssRequire.keys().forEach(cssFilePath => {
  exported[cssFilePath.replace("./", "").replace(".css", "")] = cssRequire(
    cssFilePath
  );
});

export default exported;
