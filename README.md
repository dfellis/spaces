# Space -- Easier namespaces

Space provides a shorthand for creating and and referencing namespaces.

**Usage**

Instantiate a space with a base path. Create namespaces using the *set* method.

<pre><code>
(function () {
	var space = new Space('EM.Gallery');

 	// EM.Gallery.views.account
	space.set('views.account');

	// EM.Gallery.models
	var models = space.set('models');

	models.UserModel = Backbone.Model.extend({
		defaults: {
			firstName: 'Eric',
			lastName: 'Matthys'
		}
	});

	var UserModel = space.get('models.UserModel');
})();
</code></pre>

Use aliases for long namespaces. The second argument for the *get* method sets a flag to use the alias.

<pre><code>
(function () {
	var space = new Space('EM.Gallery');

	// EM.Gallery.a.really.long.namespace
	space.alias('long', 'a.really.long.namespace');

	var long = space.get('long', true);
	long.testing = true;
})();
</code></pre>