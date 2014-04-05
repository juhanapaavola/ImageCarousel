// This is the runtime configuration file.  It complements the Gruntfile.js by
// supplementing shared properties.
Packages = undefined;

require.config({
  paths: {
    "vendor": "../vendor",
    "almond": "../vendor/bower/almond/almond",
    "underscore": "../vendor/bower/lodash/dist/lodash.underscore",
    "jquery": "../vendor/bower/jquery/dist/jquery",
    "backbone": "../vendor/bower/backbone/backbone",
	"bootstrap": "../vendor/bower/bootstrap/dist/js/bootstrap",
	"templates": "templates",
	"text" : "../vendor/bower/requirejs-text/text",
	"flexslider":"lib/woothemes-FlexSlider-7ecc526/jquery.flexslider-min"
  },
  shim:{
    'flexslider':{
      deps:['jquery']
    },
    'jquery':{
      exports:'jQuery'
    }
  }
});
