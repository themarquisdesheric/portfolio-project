'use strict';

//TODO: make active navlink bold

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
  });
};

view.tabbedContent();