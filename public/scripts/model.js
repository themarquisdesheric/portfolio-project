'use strict';

//wrap in IIFE

function Project(app) {
  this.title = app.title;
  this.url = app.url;
  this.hosted = app.hosted;
  this.image = app.image;
  this.body = app.body;
}

Project.all = [];

Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var template = Handlebars.compile(source);

  return template(this);
};

//use arrow functions here

Project.loadAll = function(rawData) {
  rawData.forEach(function(proj) {
    //create project instances and push them into projects array
    Project.all.push(new Project(proj));
  });

  Project.all.forEach(function(post) {
    $('#projects').append(post.toHtml());
  });
}

Project.fetchAll = function() {
  if (localStorage.rawData) {
    Project.loadAll(JSON.parse(localStorage.rawData));
  } else {
    $.ajax({
      url: 'data/projects.json',
      type: 'GET',
      success: function(data) {
        localStorage.setItem('rawData', JSON.stringify(data));
        Project.loadAll(data);
      },
      error: function(err) {
        console.error('AJAX error!', err);
      }
    });
  }
}

Project.fetchAll();