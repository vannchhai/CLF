ko.bindingHandlers.dataTablesForEach = {
	page: 0,
	init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
		var options = ko.unwrap(valueAccessor());
		ko.unwrap(options.data);
		if (options.dataTableOptions.paging) {
			valueAccessor().data.subscribe(function (changes) {
				var table = $(element).closest('table').DataTable();
				ko.bindingHandlers.dataTablesForEach.page = table.page();
				table.destroy();
			}, null, 'arrayChange');
		}
		var nodes = Array.prototype.slice.call(element.childNodes, 0);
		ko.utils.arrayForEach(nodes, function (node) {
			if (node && node.nodeType !== 1) {
				node.parentNode.removeChild(node);
			}
		});
		return ko.bindingHandlers.foreach.init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
	},
	update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
		var options = ko.unwrap(valueAccessor()),
            key = 'DataTablesForEach_Initialized';
		ko.unwrap(options.data);
		var table;
		//if (!options.dataTableOptions.paging) {
		table = $(element).closest('table').DataTable();
		table.destroy();
		//}
		ko.bindingHandlers.foreach.update(element, valueAccessor, allBindings, viewModel, bindingContext);
		table = $(element).closest('table').DataTable(options.dataTableOptions);
		if (options.dataTableOptions.paging) {
			if (table.page.info().pages - ko.bindingHandlers.dataTablesForEach.page == 0)
				table.page(--ko.bindingHandlers.dataTablesForEach.page).draw(false);
			else
				table.page(ko.bindingHandlers.dataTablesForEach.page).draw(false);
		}
		if (!ko.utils.domData.get(element, key) && (options.data || options.length))
			ko.utils.domData.set(element, key, true);
		return { controlsDescendantBindings: true };
	}
};

ko.bindingHandlers.iCheck = {
	init: (el, valueAccessor) => {
		var observable = valueAccessor();
		$(el).iCheck({
			checkboxClass: 'icheckbox_square-green'
		});

		$(el).on("ifChanged", function (event) {
			observable(this.checked);
		});

		if ($(el).attr('readonly') != null) $(el).next().off('click');
	},

	update: (el, valueAccessor) => {
		var val = ko.utils.unwrapObservable(valueAccessor());
		if (val) {
			$(el).iCheck('check');
		} else {
			$(el).iCheck('uncheck');
		}
	}
};

ko.observableArray.fn.refresh = function () {
	var arr = this();
	this([]);
	this(arr);
};

ko.bindingHandlers.invisible = {
	'update': function (element, valueAccessor) {
		var value = ko.utils.unwrapObservable(valueAccessor());
		var isCurrentlyVisible = !(element.style.display == "none");
		if (value && isCurrentlyVisible)
			element.style.display = "none";
		else if ((!value) && !isCurrentlyVisible)
			element.style.display = "";
	}
};

ko.bindingHandlers.tagsinput = {
	init: function (element, valueAccessor, allBindings) {
		var options = allBindings().tagsinputOptions || {};
		var value = valueAccessor();
		var valueUnwrapped = ko.unwrap(value);

		var el = $(element);

		el.tagsinput(options);

		for (var i = 0; i < valueUnwrapped.length; i++) {
			el.tagsinput('add', valueUnwrapped[i]);
		}

		el.on('itemAdded', function (event) {
			if (valueUnwrapped.indexOf(event.item) === -1) {
				value.push(event.item);
			}
		})

		el.on('itemRemoved', function (event) {
			value.remove(event.item);
		});
	},
	update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
		var valueUnwrapped = ko.unwrap(valueAccessor());

		var el = $(element);
		var prev = el.tagsinput('items');

		try {
			var added = valueUnwrapped.filter(function (i) { return prev.indexOf(i) === -1; });
			var removed = prev.filter(function (i) { return valueUnwrapped.indexOf(i) === -1; });

			// Remove tags no longer in bound model
			for (var i = 0; i < removed.length; i++) {
				el.tagsinput('remove', removed[i]);
			}

			// Refresh remaining tags
			el.tagsinput('refresh');

			// Add new items in model as tags
			for (i = 0; i < added.length; i++) {
				el.tagsinput('add', added[i]);
			}
		}
		catch (e) {
			// Refresh remaining tags
			el.tagsinput('refresh');
		}
	}
};

ko.bindingHandlers.dateTimePicker = {
	init: function (element, valueAccessor, allBindingsAccessor) {
		//initialize datepicker with some optional options
		var options = allBindingsAccessor().dateTimePickerOptions || {
			format: 'lll',
			showClear: true
		};
		$(element).keydown(function (event) {
			event.preventDefault();
		});
		$(element).datetimepicker(options);

		//when a user changes the date, update the view model
		ko.utils.registerEventHandler(element, "dp.change", function (event) {
			var value = valueAccessor();
			if (ko.isObservable(value)) {
				if (event.date != null && event.date.constructor.name == 'Moment') {
					value(event.date);
				} else if (event.date != null && event.date.constructor.name == 'Date') {
					value(moment(event.date));
				} else {
					value(null);
				}
			}
		});

		ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
			var picker = $(element).data("DateTimePicker");
			if (picker) {
				picker.destroy();
			}
		});
	},

	update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
		var picker = $(element).data("DateTimePicker");

		//when the view model is updated, update the widget
		if (picker) {
			var koDate = ko.utils.unwrapObservable(valueAccessor());
			//in case return from server datetime i am get in this form for example /Date(93989393)/ then fomat this
			koDate = typeof koDate !== 'object' ? parseFloat(koDate.replace(/[^0-9]/g, '')) : koDate;
			picker.date(koDate == null ? null : moment(koDate));
		}
	}
};

ko.bindingHandlers.datePicker = {
	init: function (element, valueAccessor, allBindingsAccessor) {
		//initialize datepicker with some optional options
		var options = allBindingsAccessor().dateTimePickerOptions || {
			format: 'll',
			showClear: true
		};
		$(element).keydown(function (event) {
			event.preventDefault();
		});
		$(element).datetimepicker(options);

		//when a user changes the date, update the view model
		ko.utils.registerEventHandler(element, "dp.change", function (event) {
			var value = valueAccessor();
			if (ko.isObservable(value)) {
				if (event.date != null && event.date.constructor.name == 'Moment') {
					value(event.date);
				} else if (event.date != null && event.date.constructor.name == 'Date') {
					value(moment(event.date));
				} else {
					value(null);
				}
			}
		});

		ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
			var picker = $(element).data("DateTimePicker");
			if (picker) {
				picker.destroy();
			}
		});
	},

	update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {

		var picker = $(element).data("DateTimePicker");

		//when the view model is updated, update the widget
		if (picker) {
			var koDate = ko.utils.unwrapObservable(valueAccessor());

			//in case return from server datetime i am get in this form for example /Date(93989393)/ then fomat this
			koDate = typeof koDate !== 'object' ? parseFloat(koDate.replace(/[^0-9]/g, '')) : koDate;
			picker.date(koDate == null ? null : moment(koDate));
		}
	}
};
