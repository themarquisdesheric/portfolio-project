'use strict';

(function(module) {
  const repoView = {};

  //make function to take care of updating nav links and hiding/showing sections

  function render(repo) {
    var source = $('#project-template').html();
    var template = Handlebars.compile(source);

    return template(repo);
  }

  repoView.index = () => {
    $('#projects').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);