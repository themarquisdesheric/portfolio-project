'use strict';

(function(module) {
  const projectView = {};

  projectView.render = () => {
    //reset active tab
    $('.tab').removeClass('active');
    $('.tab:eq(1)').addClass('active');
    $('hr').hide();

    $('.tab-content').hide();
    $('#projects').fadeIn();
  }

  module.projectView = projectView;
})(window);