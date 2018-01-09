//// direct functions to object
Object.defineProperty(Object.prototype, "clone", {
	value: function () {
		return JSON.parse(JSON.stringify(this));
	}
});

Object.defineProperty(Object.prototype, 'in', {
	value: function () {
		if (arguments.length == 0) throw new ReferenceError('argument is not defined');

		var arr = Array.isArray(arguments[0]) ? arguments[0] : arguments;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == this) return true;
		}
		return false;
	}
});

Object.defineProperty(Object.prototype, 'notIn', {
	value: function () {
		if (arguments.length == 0) throw new ReferenceError('argument is not defined');

		var arr = Array.isArray(arguments[0]) ? arguments[0] : arguments;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == this) return false;
		}
		return true;
	}
});

Array.prototype.remove = function (value_Array_Predicate) {
	/// <param name="callback" type="Function">Boolean function(value)</param>
	/// <returns type="ValueOrArray">Removed elements</returns>

	if (arguments.length == 0) throw new ReferenceError('argument is not defined');

	var vap = value_Array_Predicate;
	if (arguments.length > 1) {
		vap = [];
		for (var i = 0; i < arguments.length; i++) {
			vap.push(arguments[i]);
		}
	}

	var type = Array.isArray(vap) ? 'array' : typeof vap == 'function' ? 'function' : 'value';

	if (type == 'array') {
		for (var i = 0; i < this.length; i++) {
			if (vap.indexOf(this[i]) > -1) {
				this.splice(i, 1);
				i--;
			}
		}
	} else if (type == 'function') {
		var removedElements = [];
		for (var i = 0; i < this.length; i++) {
			if (vap(this[i])) {
				removedElements.push(this[i]);
				this.splice(i, 1);
				i--;
			}
		}
		return removedElements;
	} else {
		this.splice(this.indexOf(vap), 1);
	}
};

Array.prototype.sortDesc = function () {
	this.sort();
	this.reverse();
};

Array.prototype.sortMultiColumns = function (properties) {
	/// <param name="properties" type="String">Col1, Col2 desc</param>

	var sets = properties.split(',').filter(String);
	for (var i = 0; i < sets.length; i++) {
		var set = sets[i].split(' ').filter(String);
		sets[i] = {
			prop: set[0],
			dir: set[1]
		};
	}

	this.sort(function (a, b) {
		for (var i = 0; i < sets.length; i++) {
			var prop = sets[i].prop;
			var dir = sets[i].dir;

			var va = typeof a[prop] == 'string' ? a[prop].toUpperCase() : a[prop];
			var vb = typeof b[prop] == 'string' ? b[prop].toUpperCase() : b[prop];

			if (va == vb) {
				if (i == sets.length - 1) return 0;
			} else {				
				return dir == 'desc' ? va > vb ? -1 : 1 : va < vb ? -1 : 1;
			}
		}
	});
};

Array.prototype.contain = function (value) {
	return this.indexOf(value) > -1;
};

String.prototype.contain = function (value) {
	return this.indexOf(value) > -1;
};