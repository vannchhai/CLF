$(function () {
	// $('#modalWait').modal({
	// 	backdrop: 'static',
	// 	keyboard: false,
	// 	show: false
	// });

    // Activate Knockout
	ko.applyBindings(app);
	app.afterBinding();
});