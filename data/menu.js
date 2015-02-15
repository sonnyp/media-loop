(function(global) {

  'use strict';

  self.on('click', function(el) {
    if (el.hasAttribute('loop'))
      el.removeAttribute('loop');
    else
      el.setAttribute('loop', 'loop');
  });

  self.on('context', function(el) {
    self.postMessage(el.hasAttribute('loop'));
    return true;
  });

})(this);
