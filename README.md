#Space -- Easier namespaces

Space provides a shorthand for creating and referencing namespaces.

##The Old Way

```javascript
var EM = EM || {};

EM.Gallery = EM.Gallery || {};
EM.Gallery.views = EM.Gallery.views || {};
EM.Gallery.views.account = EM.Gallery.views.account || {};
EM.Gallery.models == EM.Gallery.models || {};
```

##The New Way

```javascript
new Space('EM.Gallery');

EM.Gallery.set('views.account');
EM.Gallery.set('models');
```

##Usage

Instantiate a space with a base path. Create namespaces using the *set* method. Return namespaces using the *get* method.

```javascript
(function () {
	// EM.Gallery
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

// EM.Gallery is also a reference to the space, so we can use it outside the module
EM.Gallery.set('collections');
```

Use aliases for long namespaces. The second argument for the *get* method sets a flag to use the alias.

```javascript
(function () {
	// EM.Gallery
	var space = new Space('EM.Gallery');

	// EM.Gallery.a.really.long.namespace
	space.alias('long', 'a.really.long.namespace');

	var long = space.get('long', true);
	long.testing = true;
})();
```