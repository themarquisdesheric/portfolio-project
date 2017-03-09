'use strict';

//TODO: make active navlink bold

// you can fire a click event to show home, like in the project. Not necessary though

var view = {};

view.tabbedContent = function() {
  $('section#projects').hide();
  $('nav').on('click', '.tab', function(event) {
    var clicked = $(this).attr('data-content');
    event.preventDefault();
    //bold active tab
    $('.tab').removeClass('active');
    $(this).addClass('active');
    //hide all sections and display relevant section
    $('section').not('section#contact, section.description').hide();
    $('section#' + clicked).show();

    if (clicked === 'projects') {
      $('hr').hide();
    } else {
      $('hr').show();
    }
  });
};

view.tabbedContent();