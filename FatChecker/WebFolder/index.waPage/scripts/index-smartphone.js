
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button_upload = {};	// @button
	var button_show = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button_upload.click = function button_upload_click (event)// @startlock
	{// @endlock
		$$('container_upload').toggle();
	};// @lock

	button_show.click = function button_show_click (event)// @startlock
	{// @endlock
		$$('image1').setValue("images/nothingchanges.jpg")
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button_upload", "click", button_upload.click, "WAF");
	WAF.addListener("button_show", "click", button_show.click, "WAF");
// @endregion
};// @endlock
