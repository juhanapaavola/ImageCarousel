define(function(require){
	"use strict";
	
	var $ = require('jquery'),
	_ = require('underscore'),
	Backbone = require('backbone'),
	tpl = require('text!templates/InfoBadgeView.html'),
	template = _.template(tpl);

	var view = Backbone.View.extend({
		initialize:function(){			
			$(this.el).empty();
			$(this.el).html(template());	
			$(this.el).find('div.badge-container').toggleClass('fadein-animation',true);
		},
		render:function(){		
			return this;
		},
		reset:function(msg){
			$(this.el).empty();
			$(this.el).html(template());
			$(this.el).find('h4').text(msg);
			if(typeof(msg)!=='undefined' && msg!==null){
				$(this.el).find('div.badge-container').toggleClass('fadein-animation',true);							
			}else{
				$(this.el).find('div.badge-container').toggleClass('fadein-animation',false);
			}
		},
		close:function(){
			this.remove();
			this.off();
		}
	});
	return view;
});