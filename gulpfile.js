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

uswds.paths.dist.css = './dist/css';
uswds.paths.dist.img = './dist/img';
uswds.paths.dist.fonts = './dist/fonts';
uswds.paths.dist.js = './dist/js';

/**
 * Exports
 * Add as many as you need
 */

exports.compile = uswds.compile;
exports.watch = uswds.watch;
exports.update = uswds.updateUswds;
exports.default = uswds.watch;