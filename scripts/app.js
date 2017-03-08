'use strict';

var projects = [];

function Project(app) {
  this.title = app.title;
  this.url = app.url;
  this.image = app.image;
  this.body = app.body;
}