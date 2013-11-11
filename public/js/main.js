/*global window:true, navigator:true, document:true, require:true, module: true, Backbone:true */
/*
 * NOTE: DO NOT DELETE
 * This file is required by both requireJs and r.js to properly manage
 * packaging and loading dependencies. If you would like to add a convenience
 * alias, include it in the 'paths' object below.
 *
 * Your application's main entry point must follow the convention of being named
 * 'app.js' to take advantage of this behavior.
 *
 * {@see http://requirejs.org/docs/api.html#config}
 */
(function (module) {

	'use strict';


	var config = module.exports = {
		// baseUrl: "",
		paths: {
			// Core libraries
			'jquery': 'lib/jquery-2.0.3.min'
		},
		shim: {
			
		}
	};

	require.config(config);
	require(['lib/less']);
	require(['app']);

}(typeof module !== 'undefined' ? module : {}));
