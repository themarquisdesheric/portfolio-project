'use strict';

var projects = [];

function Project(app) {
  this.title = app.title;
  this.url = app.url;
  this.hosted = app.hosted;
  this.image = app.image;
  this.body = app.body;
}

Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var template = Handlebars.compile(source);
  var html = template(this);

  return html;
};

githubProjects.forEach(function(proj) {
  //create project instances and push them into projects array
  projects.push(new Project(proj));
});

projects.forEach(function(post) {
  $('#projects').append(post.toHtml());
});