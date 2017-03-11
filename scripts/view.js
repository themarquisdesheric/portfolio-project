'use strict';

// you can fire a click event to show home, like in the class-03 project. Not necessary though

var view = {};

view.tabbedContent = function() {
  $('#projects').hide();
  $('nav').on('click', '.tab', function(event) {
    var clicked = $(this).attr('data-content');
    event.preventDefault();
    //bold active tab
    $('.tab').removeClass('active');
    $(this).addClass('active');
    //hide all sections and display relevant section
    $('section').not('section#contact, section.description').hide();
    $('section#' + clicked).fadeIn(800);

    if (clicked === 'projects') {
      $('hr').hide();
    } else {
      $('hr').show();
    }
  });
};

view.tabbedContent();