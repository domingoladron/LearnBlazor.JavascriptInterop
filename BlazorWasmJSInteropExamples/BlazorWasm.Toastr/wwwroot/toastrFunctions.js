window.toastrFunctions = {
	showToastrInfo: function (message, options) {
		toastr.options = options;
		toastr.info(message);
	}
}
