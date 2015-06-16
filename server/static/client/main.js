define([], function() {

	'use strict';
	console.log('starting client app');

	var MyApp = React.createClass({
		displayName: 'MyExpressApp',
		render: function() {
			return React.DOM.div(null, 'First React Comp!');
		}
	});

	var hook = document.getElementById('app');
	var appEl = React.createElement(MyApp);
	React.render(appEl, hook);
});