'use strict';

(function(module) {
  page('/', homeView.render);

  page('/projects', projectView.render);

  page();
})(window);