(function () {
	var root = this;
	var originalSpaces = root.Spaces;
	var Spaces = root.Spaces || {};
	
	Spaces.noConflict = function () {
		root.Spaces = originalSpaces;
		return this;
	};
	
	Spaces.create = function (base) {
		return new Space(base);
	};

	var Space = function (base) {
		this.base = base;
		this.aliases = {};
		
		this.set(base, true);
	};

	Space.prototype.set = function (path, isBase) {
		var level = root;
		var fullPath;

		if (isBase === true) {
			fullPath = path;
		} else {	
			fullPath = this.base + '.' + path;
		}

		var spaces = fullPath.split('.');
		var space;

		for (var i = 0; i < spaces.length; i++) {
			space = spaces[i];

			// Set up the namespace
			if (isBase === true && i + 1 >= spaces.length) {
				level[space] = this;
			} else {	
				level[space] = level[space] || {};
			}

			// Traverse down the path
			level = level[space];
		}

		return level;
	};

	Space.prototype.alias = function (alias, path) {
		this.aliases[alias] = path;

		return this.set(path);
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
	root.Spaces = Spaces;

}).call(this);