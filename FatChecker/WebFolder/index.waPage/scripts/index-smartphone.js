
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var buttonCustomer = {};	// @button
	var button_upload = {};	// @button
	var button_show = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		checkfields();
		
	};// @lock
	
	function checkfields() {
		if (!$$('textField1').getValue()) {
			$$('richTextWarning').setValue('First Name missing')
		}
		else if (!$$('textField2').getValue()) {
			$$('richTextWarning').setValue('Middle Name missing')
		}
		
		else if (!$$('textField3').getValue()) {
			$$('richTextWarning').setValue('Surname missing')
		}
		
		else if (!$$('textField4').getValue()) {
			$$('richTextWarning').setValue('User Name missing')
		}
		
		else {
			$$('richTextWarning').setValue('')
			}
	}

	buttonCustomer.click = function buttonCustomer_click (event)// @startlock
	{// @endlock
		$$('navigationView1').goToView(2);
	};// @lock

	button_upload.click = function button_upload_click (event)// @startlock
	{// @endlock
		$$('container_upload').toggle();
	};// @lock

	button_show.click = function button_show_click (event)// @startlock
	{// @endlock
		$$('image1').setValue("images/nothingchanges.jpg")
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("buttonCustomer", "click", buttonCustomer.click, "WAF");
	WAF.addListener("button_upload", "click", button_upload.click, "WAF");
	WAF.addListener("button_show", "click", button_show.click, "WAF");
// @endregion
};// @endlock
