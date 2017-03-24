import _ from 'underscore';

function replaceHash() {
  if (!window) {
    return;
  }
  // put path into the hash so we don't break any urls bookmarked before we switched from browserHistory to hashHistory
  const { history, location } = window;
  if (!location.hash || _.contains([ '#', '#/', '' ], location.hash)) {
    history.replaceState(history.state, null, `/#${location.pathname}`)
  } else {
    history.replaceState(history.state, null, `/${location.hash}`)
  }
}

module.exports = { replaceHash: replaceHash };