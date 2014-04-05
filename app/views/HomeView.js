define(function(require){
	"use strict";
	
	var $ = require('jquery'),
	_ = require('underscore'),
	Backbone = require('backbone'),
	tpl = require('text!templates/Home.html'),
	template = _.template(tpl);
	var jQuery = $;
	var flexslider = require('flexslider');
	var Badge = require('views/InfoBadgeView');

	var HomeProxy = {};
	_.extend(HomeProxy,Backbone.Events);
	
	return Backbone.View.extend({
		info:null,
	 
		initialize:function(){
			var that = this;
			HomeProxy.on('slide-load',this.resetAnimation,this);
			HomeProxy.on('slide-start',this.startAnimation,this);
			HomeProxy.on('slide-before',this.beforeAnimation,this);

			$(this.el).html(template());
			$(this.el).find('.flexslider').flexslider({
				animation:'slide',
				after:that.slideLoad,
				start:that.slideStart,
				before:that.slideBefore
			});

			this.info = new Badge({
				el:$(this.el).find("#badge-view")
			});
		},

		beforeAnimation:function(){
			this.info.reset();
		},
		startAnimation:function(index){
			var msg = $(this.el).find('ul.slides').find("li");
			msg = $(msg[0]).find('img');			
			msg = $(msg).attr('alt');
			this.info.reset(msg);
		},
		
		resetAnimation:function(index){
			var msg = $(this.el).find('ul.slides').find("li.flex-active-slide").find('img');			
			msg = $(msg).attr('alt');
			this.info.reset(msg);
		},

		slideStart:function(slider){
			HomeProxy.trigger('slide-start');
		},
		
		slideLoad:function(slider){
			HomeProxy.trigger('slide-load');
		},
		
		slideBefore:function(slider){
			HomeProxy.trigger('slide-before');
		},

		render:function(){			
			return this;
		}
	});
});