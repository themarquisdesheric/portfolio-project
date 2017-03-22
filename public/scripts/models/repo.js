'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get('https://api.github.com/users/themarquisdesheric/repos')
      .done(function(data) {
        repos.all = data;
      }).done(callback);
      // .then(res => {
      //   repos.all = res
      //   //return all repos that were not forked, and match the projects I want
      //   .filter(r => !r.fork && (r.name === 'busMall' || r.name === 'cookie-stand' || r.name === 'project-site'))
      //   .map(repo => {
      //     return {
      //       url: repo.svn_url,
      //       description: repo.description,
      //       name: repo.name
      //     }
      //   });
      //   callback();
      // }).catch(err => console.error);
  }

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  repos.requestRepos(repoView.index);

  module.repos = repos;
})(window);