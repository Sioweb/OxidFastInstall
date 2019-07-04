(function($){

	"use strict";

	var pluginName = 'fastinstall',
		PluginClass;


	/* Enter PluginOptions */
	$[pluginName+'Default'] = {
	};
	

	PluginClass = function() {

		var selfObj = this;
		this.item = false;
		this.initOptions = new Object($[pluginName+'Default']);
		
		this.init = function(elem) {
			selfObj = this;

			this.elem = elem;
			this.item = $(this.elem);
			
			this.loaded();
		};

		this.setupHandler = function(handler) {
			var selector = arguments[1]||selfObj[handler];

			if(selfObj[handler] !== undefined) {
				selfObj['$'+handler] = $(selector);
			} else {
				return;
			}

			if(!selfObj['$'+handler].length) {
				return;
			}

			return true;
		};

		this.loaded = function() {
			var moduleID = selfObj.item.attr('href').replace('Javascript:top.oxid.admin.editThis(\'', '');
			moduleID = moduleID.substring(0, moduleID.length - 3);
			
			selfObj.item.closest('td').click(function() {
				var $td = $(this),
					$form = selfObj.item.closest('form'),
					mode = $td.is('.active') ? 'deactivateModule' : 'activateModule';

				if(!$form.is('.wait-for-success')) {
					$form.addClass('wait-for-success');
					$form.css('opacity', '0.4');

					$.ajax({
						url: selfObj.item.closest('form').attr('action'),
						data: {
							cl: 'module_main',
							fnc: mode,
							oxid: moduleID
						},
						success: function(data) {
							$td.toggleClass('active');
							$form.removeClass('wait-for-success');
							$form.css('opacity', '');
						}
					});
				}
			});
		};
	};

	$[pluginName] = $.fn[pluginName] = function(settings) {
		var element = typeof this === 'function'?$('html'):this,
			newData = arguments[1]||{},
			returnElement = [];
				
		returnElement[0] = element.each(function(k,i) {
			var pluginClass = $.data(this, pluginName);

			if(!settings || typeof settings === 'object' || settings === 'init') {

				if(!pluginClass) {
					if(settings === 'init') {
						settings = arguments[1] || {};
					}
					pluginClass = new PluginClass();

					var newOptions = new Object(pluginClass.initOptions);

					/* Space to reset some standart options */

					/***/
					if(settings) {
						newOptions = $.extend(true,{},newOptions,settings);
					}
					pluginClass = $.extend(newOptions,pluginClass);
					/** Initialisieren. */
					this[pluginName] = pluginClass;
					pluginClass.init(this);
					if(element.prop('tagName').toLowerCase() !== 'html') {
						$.data(this, pluginName, pluginClass);
					}
				} else {
					pluginClass.init(this,1);
					if(element.prop('tagName').toLowerCase() !== 'html') {
						$.data(this, pluginName, pluginClass);
					}
				}
			} else if(!pluginClass) {
				return;
			} else if(pluginClass[settings]) {
				var method = settings;
				returnElement[1] = pluginClass[method](newData);
			} else {
				return;
			}
		});

		if(returnElement[1] !== undefined) {
			return returnElement[1];
		}
		
		return returnElement[0];
	};
})(jQuery);