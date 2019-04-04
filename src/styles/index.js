/*eslint-disable */
const cssRequire = require.context('!raw-loader!./', true, /.css$/);

let exported = {}
cssRequire.keys().forEach((cssFilePath) => {
  exported[cssFilePath.replace('./', '').replace('.css', '')] = cssRequire(cssFilePath);
});

export default exported
