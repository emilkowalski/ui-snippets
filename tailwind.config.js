const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.vue"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  corePlugins: {
    float: false
  },
  plugins: [require("@tailwindcss/ui")]
};
