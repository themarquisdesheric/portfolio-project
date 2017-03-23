'use strict';

(function(module) {
  const repoView = {};

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

  repos.requestRepos(repoView.index);

  module.repoView = repoView;
})(window);