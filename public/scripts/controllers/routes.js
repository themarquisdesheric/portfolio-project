'use strict';

(function(module) {
  page('/', homeController.render);

  page('/projects', projectController.render);

  page();
})(window);