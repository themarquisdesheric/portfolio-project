'use strict';

(function(module) {
  const projectController = {};

  projectController.render = () => {
    //reset active tab
    $('.tab').removeClass('active');
    $('.tab:eq(1)').addClass('active');
    $('hr').hide();

    $('.tab-content').hide();
    $('#projects').fadeIn();
  }

  module.projectController = projectController;
})(window);