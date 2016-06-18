module.exports = {
  presets: [
    require("babel-preset-es2017"),
    require("babel-preset-stage-0"),
    require("babel-preset-react")
  ],
  plugins: [
    require("babel-plugin-add-module-exports"),
    require("babel-plugin-transform-react-display-name"),
    require("babel-plugin-transform-runtime"),
    require("babel-plugin-typecheck")
  ]
}
