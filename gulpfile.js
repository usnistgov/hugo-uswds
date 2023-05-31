const uswds = require("@uswds/compile");
const typescript = require("./tasks/typescript");
const { src, dest, series, parallel, watch } = require("gulp");
const del = require('del');
const merge = require("merge-stream");
const log = console.log;
const colors = {
  red: "\x1b[31m%s\x1b[0m",
  blue: "\x1b[34m%s\x1b[0m",
  yellow: "\x1b[33m%s\x1b[0m",
};
/**
 * USWDS version
 */

uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need
 */

uswds.paths.dist.theme = './assets/vendor/scss/uswds';
uswds.paths.dist.img = './static/vendor/uswds/img'
uswds.paths.dist.fonts = './static/vendor/uswds/fonts';
uswds.paths.dist.js = './static/vendor/js/uswds';

/** this is copied from @uswds/compile, since it is not exported */
let getSrcFrom = (key) => {
  if (uswds.paths.src[key]) {
    return uswds.paths.src[key];
  }
  return uswds.paths.src.defaults[`v${uswds.settings.version}`][key];
};

function vendor(vendor) {
  return src('node_modules/' + vendor + '/**/*.{min.js,min.js.map}')
    .pipe(dest('static/vendor/js/' + vendor.replace(/\/.*/, '')));
}

function watchTS() {
  return watch(
    [
      `src/*.ts`.replace("//", "/"),
      'tsconfig.json'.replace("//", "/")
    ],
    series(typescript.minJS) // typescript.transpileTS, 
  );
}

var vendors = ['jquery/dist', 'image-map-resizer/js'];

const copy = {
  vendor() {
    log(colors.blue, `Copying vendor packages.`);
    return merge(vendors.map((pkg) => vendor(pkg)));
  },
  uswdsSass() {
    return src(`${getSrcFrom("sass")}/**/**`.replace("//", "/")).pipe(
      dest(uswds.paths.dist.theme)
    );
  }
};

const clean = {
  assets() {
    return del(['assets/vendor']);
  },
  statics() {
    return del(['static/vendor']);
  }
};

const cleanAll = series(clean.assets, clean.statics);
const copyAssets = series(uswds.copyAssets, copy.uswdsSass, copy.vendor);
const compileTS = series(typescript.minJS); // typescript.transpileTS, 
const compile = series(uswds.compileIcons, compileTS);
const init = series(copyAssets, compile);
const update = series(copyAssets, compile);
const watchAll = parallel(uswds.watch, series(compileTS, watchTS));

/**
 * Exports
 * Add as many as you need
 */
exports.clean = cleanAll;
exports.compile = compile;
exports.init = init;
exports.update = update;
exports.default = watchAll;
