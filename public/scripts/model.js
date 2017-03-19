'use strict';

(function(module) {
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

  Project.loadAll = (rawData) => {
    //create project instances and push them into projects array
    rawData.forEach((proj) => Project.all.push(new Project(proj)));

    Project.all.forEach((post) => $('#projects').append(post.toHtml()));
  }

  Project.fetchAll = () => {
    if (localStorage.rawData) {
      Project.loadAll(JSON.parse(localStorage.rawData));
    } else {
      $.ajax({
        url: 'data/projects.json',
        type: 'GET',
        success: (data) => {
          localStorage.setItem('rawData', JSON.stringify(data));
          Project.loadAll(data);
        },
        error: (err) => console.error('AJAX error!', err)
      });
    }
  }

  module.Project = Project;
  Project.fetchAll();

})(window);
