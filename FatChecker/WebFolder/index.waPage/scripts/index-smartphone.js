
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var login1 = {};	// @login
	var button1 = {};	// @button
	var buttonCustomer = {};	// @button
	var button_upload = {};	// @button
	var button_show = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		$$('navigationView1').goToView(3);
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		$$('navigationView1').goToView(1);
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		registerUser()
		
	};// @lock
	
	function registerUser() {
		var comPlete = checkfields();
		if (comPlete) {
			var isLong = checklengths();
			if (comPlete && isLong) {
			$$('richTextWarning').setValue('')
			ds.Customer.registerCustomer(objRegistration);
		}
		}		
	}
	
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
		
		else if (!$$('textField5').getValue()) {
			$$('richTextWarning').setValue('Password missing')
		}
		
		else {
			$$('richTextWarning').setValue('')
			return true;
			}
	}
	
	function checklengths() {
		if($$('textField4').getValue().length < 8) {
			$$('richTextWarning').setValue('User Name must be at least 8 characters');
			}
		else if($$('textField5').getValue().length < 8) {
			$$('richTextWarning').setValue('Password must be at least 8 characters');
			}		
		else {
			$$('richTextWarning').setValue('');
			return true;
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
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("buttonCustomer", "click", buttonCustomer.click, "WAF");
	WAF.addListener("button_upload", "click", button_upload.click, "WAF");
	WAF.addListener("button_show", "click", button_show.click, "WAF");
// @endregion
};// @endlock
