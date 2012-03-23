#Spaces -- Easier nested namespaces

Spaces provides a shorthand for creating and referencing namespaces.

##Without Spaces

```javascript
var EM = EM || {};

EM.Gallery = EM.Gallery || {};
EM.Gallery.views = EM.Gallery.views || {};
EM.Gallery.views.account = EM.Gallery.views.account || {};
EM.Gallery.models == EM.Gallery.models || {};
```

##With Spaces

```javascript
Spaces.create('EM.Gallery');

EM.Gallery.set('views.account');
EM.Gallery.set('models');
```

##Usage

Instantiate a space with a base path. Create namespaces using the *set* method. Return namespaces using the *get* method.

```javascript
(function () {
	// EM.Gallery
	var space = Spaces.create('EM.Gallery');

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

Set up aliases for long namespaces using the *alias* method. The second argument for the *get* method sets a flag to use the alias.

```javascript
(function () {
	// EM.Gallery
	var space = Spaces.create('EM.Gallery');

	// EM.Gallery.a.really.long.namespace
	space.alias('long', 'a.really.long.namespace');

	var long = space.get('long', true);
	long.testing = true;
})();
```

Use the *noConflict* method to return the Spaces object back to its original value.

```javascript
var AltSpaces = Spaces.noConflict();

AltSpaces.create('EM.Gallery');
```

##License
Spaces is licensed under the terms of the MIT License. See the MIT-LICENSE file for details.