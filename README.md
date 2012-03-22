# Space -- Easier namespaces

Space provides a shorthand for creating and and referencing namespaces.

**Usage**

Instantiate a space with a base path. Create namespaces using the *set* method.

<code class="javascript">
// Normal

(function () {
	var space = new Space('EM.Gallery');

 	// EM.Gallery.views
	space.set('views');

	// EM.Gallery.collections
	space.set('collections');

	// EM.Gallery.models
	space.set('models');

	EM.Gallery.models.UserModel = Backbone.Model.extend({
		defaults: {
			firstName: 'Eric',
			lastName: 'Matthys'
		}
	});

	var UserModel = space.get('models.UserModel');
})();
</code>

Use aliases for long namespaces. The second argument for the *get* method sets a flag to use the alias.

<code class="javascript">
// Alias

(function () {
	var space = new Space('EM.Gallery');

	// EM.Gallery.a.really.long.namespace
	space.alias('long', 'a.really.long.namespace');

	var long = space.get('long', true);
	long.testing = true;
})();
</code>