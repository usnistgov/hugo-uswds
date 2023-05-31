const { dest } = require("gulp");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const tsify = require("tsify");
const sourcemaps = require("gulp-sourcemaps");
const buffer = require("vinyl-buffer");
const uglify = require('gulp-uglify');

module.exports = {
  minJS() {
    return browserify({
      basedir: ".",
      debug: true,
      entries: ["src/index.ts"],
      cache: {},
      packageCache: {},
    })
      .plugin(tsify)
      .transform("babelify", {
        presets: ["@babel/preset-env"],
        extensions: [".ts"],
      })
      .bundle()
      .pipe(source("hugo-uswds.min.js"))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify())
      .pipe(sourcemaps.write("./"))
      .pipe(dest("static/js"));
  }
};
