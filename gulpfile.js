/* gulpfile.js */

const uswds = require("@uswds/compile");

/**
 * USWDS version
 */

uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need
 */

uswds.paths.dist.css = './assets/css';
uswds.paths.dist.theme = './sass';

//uswds.paths.src.theme = './theme-src/scss'
//uswds.paths.dist.css = './dist/css';
uswds.paths.dist.img = './dist/img';
uswds.paths.dist.fonts = './dist/fonts';
uswds.paths.dist.js = './dist/js';

/**
 * Exports
 * Add as many as you need
 */

exports.init = uswds.init;
exports.compile = uswds.compile;
exports.update = uswds.updateUswds;
