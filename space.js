(function () {
	var root = this;

	var Space = function (base) {
		this.base = base;
		this.aliases = {};
	};

	Space.prototype.set = function (path) {
		var level = root;
		var fullPath = this.base + '.' + path;
		var spaces = fullPath.split('.');
		var space;

		for (var i = 0; i < spaces.length; i++) {
			space = spaces[i];

			// Set up the namespace
			level[space] = level[space] || {};

			// Traverse down the path
			level = level[space];
		}
	};

	Space.prototype.alias = function (alias, path) {
		this.aliases[alias] = path;

		this.set(path);
	}

	Space.prototype.get = function (path, isAlias) {
		var level = root;

		if (isAlias === true) {
			path = this.aliases[path];
		}

		var fullPath = this.base + '.' + path;
		var spaces = fullPath.split('.');

		for (var i = 0; i < spaces.length; i++) {
			// Traverse down the path
			level = level[spaces[i]];
		}

		return level;
	};

	// Attach the constructor to the root
	root.Space = Space;

}).call(this);