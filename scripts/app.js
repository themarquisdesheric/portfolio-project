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
  var $newProject = $('article.template').clone();
  //set title
  $newProject.find('h2 a').text(this.title);
  //set GitHub URL
  $newProject.find('a[class="github-link"]').attr('href', this.url);
  //set image
  $newProject.find('img').attr('src', this.image);
  //set body
  $newProject.find('section.description').html(this.body);
  //set hosted URL
  $newProject.find('a[class="hosted-link"]').attr('href', this.hosted);
  //remove template class
  $newProject.removeClass('template');

  return $newProject;
};

githubProjects.forEach(function(proj) {
  //create project instances and push them into projects array
  projects.push(new Project(proj));
});

projects.forEach(function(post) {
  $('#projects').append(post.toHtml());
});
