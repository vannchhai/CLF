function AppDataModel() {
    var self = this;
    // Routes
    self.siteUrl = "/";

	// Data
    self.user = ko.observable(null);

    self.getUserFromStorage = function () {
    	return JSON.parse(sessionStorage.getItem('userInfo'));
    };

    self.removeUserStorage = function(){
        sessionStorage.removeItem('userInfo');
        app.views('Login');
    }
    self.setUserToStorage = function (obj) {
        app.header('Home');
        app.views('List');
    	return sessionStorage.setItem('userInfo', JSON.stringify(obj));
    };

    self.returnUrl = function (url) {
    	if (url) {
    		sessionStorage.setItem("returnUrl", url);
    	} else {
    		return sessionStorage.getItem("returnUrl");
    	}
    };

	// Data access operations
    self.setAccessToken = function (accessToken) {
    	sessionStorage.setItem("accessToken", accessToken);
    };

    self.getAccessToken = function () {
        return sessionStorage.getItem("accessToken");
    };

	self.afterBindingCallbacks = [];
}
