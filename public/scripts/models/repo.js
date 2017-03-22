'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax('https://api.github.com/users/themarquisdesheric/repos', {
      method: 'GET',
      headers: {
        Authorization: `token ${token}`
      }
    })
      .then(res => {
        repos.all = res
        //return all repos that were not forked
        .filter(r => !r.fork && (r.name === 'busMall' || r.name === 'cookie-stand' || r.name === 'project-site'))
        .map(repo => {
          return {
            url: repo.url,
            description: repo.description,
            name: repo.name
          }
        });
        callback();
      }).catch(err => console.error);
  }

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  repos.requestRepos(repoView.index);

  module.repos = repos;
})(window);