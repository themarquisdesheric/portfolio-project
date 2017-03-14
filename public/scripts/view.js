'use strict';

var view = {};

view.tabbedContent = function() {
  $('nav').on('click', '.tab', function(event) {
    var clicked = $(this).attr('data-content');
    event.preventDefault();
    //bold active tab
    $('.tab').removeClass('active');
    $(this).addClass('active');
    //hide all sections and display relevant section
    $('section').not('#contact, .description').hide();
    $(`#${clicked}`).fadeIn(800);

    if (clicked === 'projects') {
      $('hr').hide();
    } else {
      $('hr').show();
    }
  });

  $('#projects').hide();
};

view.tabbedContent();