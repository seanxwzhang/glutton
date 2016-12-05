(function (app) {
  'use strict';

  app.registerModule('glutton', ['core']);
  app.registerModule('glutton.routes', ['ui.router', 'core.routes']);
  app.registerModule('glutton.services');
}(ApplicationConfiguration));
