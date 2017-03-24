'use strict';

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function replaceHash() {
  if (!window) {
    return;
  }
  // put path into the hash so we don't break any urls bookmarked before we switched from browserHistory to hashHistory
  var _window = window,
      history = _window.history,
      location = _window.location;

  if (!location.hash || _underscore2.default.contains(['#', '#/', ''], location.hash)) {
    history.replaceState(history.state, null, '/#' + location.pathname);
  } else {
    history.replaceState(history.state, null, '/' + location.hash);
  }
}

module.exports = { replaceHash: replaceHash };