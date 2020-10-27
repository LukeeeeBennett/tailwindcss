"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _lodash = _interopRequireDefault(require("lodash"));

var _usesCustomProperties = _interopRequireDefault(require("../util/usesCustomProperties"));

var _flattenColorPalette = _interopRequireDefault(require("../util/flattenColorPalette"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return function ({
    addUtilities,
    e,
    theme,
    variants,
    target
  }) {
    const utilities = _lodash.default.fromPairs(_lodash.default.map((0, _flattenColorPalette.default)(theme('backgroundImage')), (value, modifier) => {
      if (target('backgroundImage') === 'ie11' && (0, _usesCustomProperties.default)(value)) {
        return [];
      }

      return [`.${e(`bg-${modifier}`)}`, {
        'background-image': value
      }];
    }));

    addUtilities(utilities, variants('backgroundImage'));
  };
}