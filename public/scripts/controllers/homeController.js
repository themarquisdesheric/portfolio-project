'use strict';

(function(module) {
  const homeController = {};

  homeController.render = function() {
    //reset active tab
    $('.tab').removeClass('active');
    $('.tab:first').addClass('active');
    $('hr').show();

    $('.tab-content').hide();
    $('#intro').fadeIn();
  }

  module.homeController = homeController;
})(window);