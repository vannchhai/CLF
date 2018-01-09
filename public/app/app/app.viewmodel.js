function AppViewModel(dataModel) {
	// Private state
	var self = this;
	self.views = ko.observable('Login');
	/****************************
    / Setting Animation IN/OUT
    *****************************/
	self.animateIn = ko.observable('fadeIn');
	self.animateOut = ko.observable('fadeOut');

	// Data
	self.dataModel = dataModel;

	// UI state
	self.view = ko.observable();

	//if (!dataModel.getAccessToken()) {
	//	// The following code looks for a fragment in the URL to get the access token which will be
	//	// used to call the protected Web API resource
	//	var fragment = common.getFragment();

	//	if (fragment.access_token) {
	//		// returning with access token, restore old location
	//		dataModel.setAccessToken(fragment.access_token);
	//		window.location = dataModel.returnUrl();
	//	} else {
	//		// no token - so bounce to Authorize endpoint in AccountController to sign in or register
	//		dataModel.returnUrl(window.location);
	//		window.location = "/Account/Authorize?client_id=web&response_type=token";
	//	}
	//}

	// After binding completely, this function will run
	self.afterBinding = function (callback) {
		if (callback === undefined) {
			dataModel.afterBindingCallbacks.forEach(function (cb) { cb();});
		} else if (callback !== null && typeof callback == 'function') {
			dataModel.afterBindingCallbacks.push(callback);
		}
	};

	// Other operations
	self.addViewModel = function (options) {
		var viewItem = new options.factory(self, dataModel);

		// Add view to AppViewModel (for example, app.Home)
		self[options.name] = viewItem;
		self.view(options.name);
	};

	moment.fn.toJSON = function () {
		return this.format('YYYY-MM-DD[T]HH:mm:ss.SSS');
	}


	/************************
    / All Function goes here
    *************************/
	self.DisplayName = ko.observable('Unknown');
	self.message = ko.observable('');
	self.error = ko.observable('');

	// Success Function
	// self.error.subscribe(function (newValue) {
	// 	if (newValue != '') self.hideWait();
	// });

	self.success = function (msg) {
		self.message(msg);
		$("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
			$("#success-alert").slideUp(500);
		});
	};

	self.warning = function (msg) {
		self.message(msg);
		$("#warning-alert").fadeTo(2000, 500).slideUp(500, function () {
			$("#warning-alert").slideUp(500);
		});
	};

	window.onerror = function (msg, url, lineNo, columnNo, error) {
		self.error(msg);
	};


	// Ajax Function
	var ajaxSync = [];
	function runAjaxSync() {
		var obj = ajaxSync[0];
		self.ajaxHelper(obj.uri, obj.method, true, obj.data).done(obj.fnDone).always(function () {
			ajaxSync.shift();
			if (ajaxSync.length > 0) runAjaxSync();
		});
	}
	self.ajaxHelper = function (uri, method, async, data) {
		/// <summary>Call jQuery Ajax.</summary>
		/// <param name="uri" type="String">Url string to load api.</param>
		/// <param name="method" type="String">Method GET, POST, PUT, DELETE to api.</param>
		/// <param name="async" type="Boolean">Set asynchronous function if true. False is waiting until data loaded.</param>
		/// <param name="data" type="Object">Object for POST, PUT data to api.</param>
		/// <returns type="Object">Function to load "Done".</returns>

		if (async === false) {
			var callback = {
				uri: uri, method: method, data: data, fnDone: null,
				done: function (fn) { this.fnDone = fn; }
			};
			ajaxSync.push(callback);
			if (ajaxSync.length == 1) setTimeout(runAjaxSync, 200);
			return callback;
		}

		self.error(""); //Clear error

		// Make a call to the protected Web API by passing in a Bearer Authorization Header        
		return $.ajax({
			url: uri,
			type: method,
			contentType: 'application/json; charset=utf-8',
			headers: { 'Authorization': 'Bearer ' + dataModel.getAccessToken() },
			async: async === false ? false : true,
			data: ko.toJSON(data)
		}).fail(function (jqrXHR, textStatus, errorThrown) {
			self.error(errorThrown != '' ? errorThrown : 'Unknown Error');
		});
	};

	// get user and user's roles
	if (dataModel.getUserFromStorage() == null) {
		if (dataModel.getAccessToken() != null) {
			self.ajaxHelper('api/login', 'GET').done(function (data) {
				dataModel.user(data);
				dataModel.setUserToStorage(data);
				self.DisplayName(data.displayName);
			});
		}
	} else {
		dataModel.user(dataModel.getUserFromStorage());
		self.DisplayName(dataModel.user().displayName);
	}

	// check role function
	self.hasRole = function (menu, level) {
		return CheckMenuPermission(menu, level, dataModel);
	};

	self.showWarning = function (idOrElement, msg, SecondWarning) {
		var el;
		if (typeof idOrElement == 'string') el = $('#' + idOrElement);
		else el = $(idOrElement);

		if (SecondWarning !== undefined && !SecondWarning) {
			el.get(0).scrollIntoView();
			window.scrollTo(window.scrollX, window.scrollY - 80);
		}

		if (el.prop('tagName').in('INPUT', 'SELECT')) {
			if (el.next().hasClass('error')) return;

			el.after('<div class="error errorX">' + msg + '</div>');

			if (el.warnFocus === undefined) {
				el.warnFocus = true;
				el.focus(function () {
					el.next().remove();
				});
			}
		} else {
			if (el.children().last().hasClass('error')) return;

			el.append('<div class="error errorX">' + msg + '</div>');

			if (el.warnClick === undefined) {
				el.warnClick = true;
				el.click(function () {
					el.children('.error').remove();
				});
			}
		}
	};

	self.removeAllWarning = function () {
		$('.errorX').remove();
	};

	// self.showWait = function () {
	// 	//Pace.stop();
	// 	//Pace.start();
	// 	$('#modalWait').modal('show');
	// };

	// self.hideWait = function () {
	// 	//Pace.stop();
	// 	$('#modalWait').modal('hide');
	// };

	self.isValidEmail = function (email) {
		var expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return expression.test(email);
	};

	self.showDelete = function (runFunction) {
		$('#modalDelete').modal('show');
		$('#btnDelete').off().click(function () {
			$('#modalDelete').modal('hide');
			runFunction();
		});
	};

	self.showMsg = function (msg, title) {
		var e = $('#modalMsg');
		e.find('h4').text(title == null ? 'Message' : title);
		e.find('p').text(msg);
		e.modal('show');
	}

	self.convert2Ko = function (value) {
		var model = {};

		for (var p in value) {
			if (Array.isArray(value[p])) {
				model[p] = ko.observableArray(value[p]);
			} else {
				model[p] = ko.observable(value[p]);
			}
		}
		return model;
	};

	self.convert2NewModel = function (model, newModel) {
		model = ko.toJS(model);
		newModel = newModel.clone();
		for (var p in newModel) {
			newModel[p] = model[p];
		}
		return newModel;
	};

	self.trimProperties = function (model) {
		for (var p in model) {
			if (typeof model[p] == 'function') {
				var value = model[p]();
				if (typeof value == 'string') model[p](value.trim());
			} else {
				var value = model[p];
				if (typeof value == 'string') model[p] = value.trim();
			}
		}
	};

	self.activateColorPicker = function () {
		$('[data-colorpicker]').each(function () {
			if ($(this).attr('data-colorpicker') == 'true') {
				$(this).attr('data-colorpicker', 'false');
				$(this).colorpicker();
			}
		});
	};

	self.formatCode = function (lastCode) {
		var num = (lastCode.lastCount + 1).toString();
		var arr = [];
		while (num.length > 3) {
			arr.push(num.substr(num.length - 3, 3));
			num = num.substr(0, num.length - 3);
		}
		arr.push(num);

		for (var i = 0; i < arr.length; i++) {
			arr[i] = '00' + arr[i];
			arr[i] = arr[i].substr(arr[i].length - 3, 3);
		}
		arr.reverse();

		return lastCode.prefix + '-' + arr.join('-');
	};
	self.autoSort = function (lastCode) {
		var num = (lastCode.lastCount + 1).toString();
		var arr = [];
		while (num.length > 3) {
			arr.push(num.substr(num.length - 3, 3));
			num = num.substr(0, num.length - 3);
		}
		arr.push(num);
		arr.reverse();
		return arr.join('-');
	};
	self.choosePhoto = function (model) {
		$(model.photoFile.element).click();
	};
	self.changePhoto = function (model) {
		var file = model.photoFile.element.files[0];
		if (file == null) return;
		var imageType = /image.*/;
		if (!file.type.match(imageType) || file.size > 10485760) { // 10MB
			model.photoImg(null);
			$(model.photoText.element).addClass('text-danger');
			model.photoData('');
			model.photoText(file.size > 10485760 ? 'File cannot be larger than 10MB!' : 'File is not supported!');
		} else {
			var reader = new FileReader();

			reader.onload = function () {
				//var name = self.setUpCroppie(reader.result);
				model.photoImg(reader.result);
				model.photoText(file.name);
				$(model.photoText.element).removeClass('text-danger');
				model.photoData(reader.result.split(',')[1]);
			};

			reader.readAsDataURL(file);
		}
	};
	self.setUpCroppie = function (model) {
		// $('#image').cropper({
		//	viewMode: 1,
		//	dragMode: 'move',
		//	autoCropArea: 0.65,
		//	restore: false,
		//	guides: false,
		//	highlight: false,
		//	cropBoxMovable: false,
		//	cropBoxResizable: false
		//});
			//$('#image').croppie('destroy');
			//var basic = $('#image').croppie({
			//	enableExif: true,
			//	viewport: {
			//		width: 250,
			//		height: 250,
			//		type: 'circle'
			//	},
			//	boundary: { width: 300, height: 300 },
			//	showZoomer: true,
			//	enableOrientation: true
			//});
			// basic.croppie('bind', { url:model })
		// return basic.croppie('result', { type: 'canvas', size: 'viewport' });

	};

	self.setNumberOnly = function (element) {
		if ($(element).attr('data-type') == 'float') {
			$(element).keydown(function (e) {
				// Allow: backspace, delete, tab, escape, enter and .
				if ($.inArray(e.keyCode, [8, 46, 9, 27, 13, 110, 190]) !== -1 ||
					// Allow: Ctrl+A, Command+A
					(e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
					// Allow: home, end, left, right, down, up
					(e.keyCode >= 35 && e.keyCode <= 40)) {
					// let it happen, don't do anything
					if (e.key == '.' && this.value.indexOf('.') > -1) {
						e.preventDefault();
					}
					return;
				}
				// Ensure that it is a number and stop the keypress
				if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
					e.preventDefault();
				}
			});
		} else if ($(element).attr('data-type') == 'int') {
			$(element).keydown(function (e) {
				// Allow: backspace, delete, tab, escape, enter and .
				if ($.inArray(e.keyCode, [8, 46, 9, 27, 13]) !== -1 ||
					// Allow: Ctrl+A, Command+A
					(e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
					// Allow: home, end, left, right, down, up
					(e.keyCode >= 35 && e.keyCode <= 40)) {
					// let it happen, don't do anything
					return;
				}
				// Ensure that it is a number and stop the keypress
				if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
					e.preventDefault();
				}
			});
		}
	};

	self.currency = function (value) {
		value = parseFloat(value);
		var minus = value < 0;
		value = value.toFixed(2).replace('-', '');
		var all = value.split('.');
		var num = all[0];
		var arr = [];
		while (num.length > 3) {
			arr.push(num.substr(num.length - 3, 3));
			num = num.substr(0, num.length - 3);
		}
		arr.push(num);
		value = '.' + all[1];
		for (var i = 0; i < arr.length; i++) {
			if (i > 0) value = ',' + value;
			value = arr[i] + value;
		}
		return (minus ? '-' : '') + value;
	};

	self.currencyU = function (value) {
		value = self.currency(value)
		return value.contain('-') ? value.replace('-', '-$') : '$' + value;
	};
	self.currencyPercent = function (value) {
	    value = self.currency(value)
	    return value.contain('-') ? value.replace(' - ', ' -% ') : ' % ' + value.replace(".00","");
	};

    // format split only string 
	self.splitString = function (args) {
	    if (args != null && args.search('♣') != -1) {
			var value = '';
			for (var i = 0; i < args.split('♣').length; i++) {
				if (args.split('♣')[i] == "") {
					continue;
				} else {
				    value += args.split('♣')[i]+ ' /';
				}
			}
			return value.substring(0, value.length - 1);
		}
		else {
			return args;
		}
	}

    // format split string under
	self.splitStringUnder = function (args) {
		if (args.split('♣')) {
			var value = '';
			for (var i = 0; i < args.split('♣').length; i++) {
				if (args.split('♣')[i] == "") {
					continue;
				} else {
					value += args.split('♣')[i] + '  /';
				}
			}
			return value.substring(0, value.length - 1);
		}
		else {
			return args;
		}
	}

	self.checkLanguages = function (value) {
		var model = value;
		for (var i = 0; i < data.length; i++) {
			for (var j = 0; j < value.length; j++) {
				var lenVal = value[j].names.split('♣').length;
				if (data.length > lenVal) {
					// if insert languages
					var addStr = [];
					var index = data.length - lenVal;
					for (var k = 0; k < index; k++) {
						addStr.push("♣");
					}
					var chgVal = value[j].names.concat(addStr.toString().split(",").join(''));
					model[j].names = chgVal;
				} else if (data.length < lenVal) {
					// if remove languages
					var chgVal = [];
					for (var m = 0; m < data.length; m++) {
						for (var b = 0; b < value[j].names.split('♣').length; b++) {
							if (m == b) {
								chgVal.push(value[j].names.split('♣')[b]);
							}
						}
					}
					chgVal.push();
					model[j].names = chgVal.toString().split(',').join('♣');
				} else {
					model = value;
				}
			}
		}
		return model;
	};
	self.switchCurrency = function (baseName, baseVal, objCur) {
	    var bv = objCur.find(function (r) { return r.curName == baseName; }).exchangeRate;
	    objCur.forEach(function (r) {
	        var id = ('.' + r.curName).toString();
	        if (baseName == r.curName) {
	            var ex = (bv / r.exchangeRate);
	            if (r.curName == baseName) {
	                r.exchangeRate = ex;
	                $(id).val(ex);
	            } else {
	                r.exchangeRate = ex;
	                $(id).val(ex);
	            }
	        } else {
	            var ex = (bv * r.exchangeRate);
	            if (r.curName != baseName) {
	                r.exchangeRate = ex;
	                $(id).val(ex);
	            } else {
	                r.exchangeRate = ex;
	                $(id).val(ex);
	            }
	        }
	    });
	    return objCur;
	}

    // format round number type : round, floor, ceil. value is number, expression after (.)
	self.formatRoundNumber = function (type, value, exp) {
	    // If the exp is undefined or zero...
	    if (typeof exp === 'undefined' || +exp === 0) {
	        return Math[type](value);
	    }
	    value = +value;
	    exp = +exp;
	    // If the value is not a number or the exp is not an integer...
	    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
	        return NaN;
	    }
	    // If the value is negative...
	    if (value < 0) {
	        return -decimalAdjust(type, -value, exp);
	    }
	    // Shift
	    value = value.toString().split('e');
	    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
	    // Shift back
	    value = value.toString().split('e');
	    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
	}

    // Decimal round
    if (!Math.round10) {
        Math.round10 = function(value, exp) {
            return decimalAdjust('round', value, exp);
        };
    }
    // Decimal floor
    if (!Math.floor10) {
        Math.floor10 = function(value, exp) {
            return decimalAdjust('floor', value, exp);
        };
    }
    // Decimal ceil
    if (!Math.ceil10) {
        Math.ceil10 = function(value, exp) {
            return decimalAdjust('ceil', value, exp);
        };
    }

	// format time picker
    self.formatTime = function (t) {
    	var e = t.search(" AM");
    	var get;
    	if (e > 0) {
    		get = t.replace(" AM", ":00.000");
    	} else {
    		get = t.replace(" PM", ":00.000");
    	}
    	return get;
    }
    /*
    * convert index to day
    * index = [0,1,2,3,4,5,6,7] 
    * index 7 is All Days
    * return days
    */
    self.displayDay = function (e) {
    	var days = [{ id: 0, text: 'Monday' }, { id: 1, text: 'Thuesday' }, { id: 2, text: 'Wednesday' }, { id: 3, text: 'Thursday' }, { id: 4, text: 'Friday' }, { id: 5, text: 'Saturday' }, { id: 6, text: 'Sunday' }];
    	var out = [];
    	days.forEach(function (r) {
    		for (var i = 0; i < e.split(',').length; i++) {
    			if (r.id == e.split(',')[i]) {
    				out.push(r.text);
    			}
    		}
    	});
    	return out;
    }

    /* 
    * render column languages
    * model is array object from api
    * language is array data from tbl_lanauages
    */
    self.renderLanguages = function (model, language) {
        var newModel = [];
        model.forEach(function (r) {
            language.forEach(function (e) {
            	if (e.active == true) {
            		var index = e.index;
            		r[e.langTitle] = r.Name.split('♣')[index - 1];
            	}
            });
            r.Action = '<td class="text-nowrap"><a href="#" class="btn btn-warning" onclick="goView(\'detail\',\'' + r.Cd + '\')"><i class="fa fa-eye" ></i></a> <a href="#" class="btn btn-success" onclick="goView(\'edit\',\'' + r.Cd + '\')"><i class="fa fa-edit" ></i></a> <a href="#" class="btn btn-danger" onclick="goDelete(\'' + r.Cd + '\')"><i class="fa fa-trash"></i></a></td>';
            newModel.push(r);
        });
        if (model.length <= 0) newModel = [{ "Message Warning": "Data Not found!" }];
        return newModel;
    }
    /* 
    * show form dynamic languages
    * Arguments list
    * model : is array object from api
    * language : is array data from tbl_lanauages
    * e : are True:update, False:create
    */
    self.showFormLanguages = function (model, languages, e) {
        var returnData = [];
        if (e == true) {
        	languages.forEach(function (r) {
            var obj = {};
				obj.name = r.langTitle;
				obj.active = r.active;
				obj.title = model.names.split('♣')[r.index -1];
				obj.description = model.descriptions.split('♣')[r.index - 1];
            returnData.push(obj);
            });
           
        } else {
        	languages.forEach(function (r) {
                var obj = {};
                	obj.name = r.langTitle;
                	obj.title = '';
                	obj.active = r.active;
                	obj.description = '';
                	returnData.push(obj);
            });
        }
        return returnData;
    }

    // ========== App View Model ========== //

    self.email = ko.observable('');
    self.password = ko.observable('');
    self.header = ko.observable('');
    self.DisplayName = ko.observable('');

    self.cl_home = function(){
    	self.header('Home');
    	self.views("List");
    }
    self.cl_map = function(){
    	self.header('Map View Items');
		self.views("Map");
    }
    self.cl_profile = function(){
    	self.header(self.DisplayName());
		self.views("Profile");
    }
    self.cl_notification = function(){
    	self.header('Notification');
    	self.views("Notification");
    }
    self.cl_menu = function (){
    	self.header('Menu');
		self.views("Menu");
    }

    self.cl_logout = function(){
    	dataModel.removeUserStorage();
    }
    self.processLogin = function(){
    	var model = {
    		email: self.email(),
    		password: self.password(),
    		_token: $('#token input').val()
    	}

    	self.ajaxHelper('api/login', 'POST', false, model).done(function(data){
    		if (data.name != undefined) {
    			dataModel.user(data);
				dataModel.setUserToStorage(data);
				self.DisplayName(data.name);
    		};
    	});
    }
}
var app = new AppViewModel(new AppDataModel());