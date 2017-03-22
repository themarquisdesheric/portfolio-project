'use strict';

(function(module) {
  const homeView = {};

  homeView.render = function() {
    //reset active tab
    $('.tab').removeClass('active');
    $('.tab:first').addClass('active');
    $('hr').show();

    $('.tab-content').hide();
    $('#intro').fadeIn();
  }

  module.homeView = homeView;
})(window);