define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
  var HomeView = require('views/HomeView');
  var $ = require('jquery');
  
  // Defining the application router.
  module.exports = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
		this.changePage(new HomeView({
		}));
    },
	
	changePage:function(page){
		$('body').empty();
		$('body').append(page.render().el);
	}	
  });
});
