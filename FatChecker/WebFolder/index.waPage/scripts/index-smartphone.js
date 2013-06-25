
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var backButton1 = {};	// @button
	var buttonOK = {};	// @button
	var buttonClear = {};	// @button
	var imagebody = {};	// @image
	var selectType = {};	// @select
	var documentEvent = {};	// @document
	var login1 = {};	// @login
	var button1 = {};	// @button
	var buttonCustomer = {};	// @button
	var button_upload = {};	// @button
	var button_show = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	backButton1.click = function backButton1_click (event)// @startlock
	{// @endlock

	};// @lock

	buttonOK.click = function buttonOK_click (event)// @startlock
	{// @endlock
		computeDistance();
		//$$('containerdialog').hide();
	};// @lock

	buttonClear.click = function buttonClear_click (event)// @startlock
	{// @endlock
		$$('richTextLeft').setValue('')
		$$('richTextRight').setValue('')
		$$('containerdialog').hide();
	};// @lock

	imagebody.click = function imagebody_click (event)// @startlock
	{// @endlock
		mousePosition(event);


	};// @lock
	
function computeDistance() {
	
	varPoints = $$('richTextLeft').getValue() + "," + $$('richTextRight').getValue()
	varArray= varPoints.split(',')
	deltaX=Math.pow((varArray[2]-varArray[0]), 2);
	deltaY=Math.pow((varArray[3]-varArray[3]), 2);
	hyp=deltaX + deltaY;
	dist = Math.pow(hyp, .5)
	$$('richTextValue').setValue(dist)
	
}
	
function showContainer() {
		if ($('#containerdialog').is(':hidden')) {
			$$('containerdialog').show();
		}
}
	
function mousePosition(event) {
	
	
	if ($$('richTextLeft').getValue()==='') {
		left=event.screenX + ',' + event.screenY;
		$$('richTextLeft').setValue(left);	
	}
	else if ($$('richTextRight').getValue()==='') {
			right=event.screenX + ',' + event.screenY;
			$$('richTextRight').setValue(right);
			showContainer()		
	}
	
	//return({x:event.screenX, y:event.screenY })
}
	

function createUUID() {
    // http://www.ietf.org/rfc/rfc4122.txt
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

	selectType.change = function selectType_change (event)// @startlock
	{// @endlock
		document.getElementById('frame1-frame').contentDocument.getElementById('measureId').value=this.getValue();
		document.getElementById('frame1-frame').contentDocument.getElementById('userNamer').value=WAF.directory.currentUser().userName;
		varUuid =createUUID();
		document.getElementById('frame1-frame').contentDocument.getElementById('Uuid').value=varUuid;
		$$('richTextUUID').setValue(varUuid)
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock

		if (WAF.directory.currentUser()) {
			$$('navigationView1').goToView(1);
		}
		else {
			$$('navigationView1').goToView(3);
		}
		
	};// @lock

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
		registerUser();
	};// @lock
	
	function registerUser() {
		var comPlete = checkfields();
		if (comPlete) {
			var isLong = checklengths();
			if (comPlete && isLong) {
			$$('richTextWarning').setValue('')
			ds.Customer.registerCustomer(objRegistration, {onSuccess: function(event) {
				//$$('navigationView1').goToView(1)
				$$('richTextWarning').setValue('You may now login')
				}
			
		});
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
		//$$('navigationView1').goToView(2);
		if (WAF.directory.currentUser()) {
			$$('navigationView1').goToView(1);
		}
		else {
			$$('navigationView1').goToView(2);
		}		
	};// @lock

	button_upload.click = function button_upload_click (event)// @startlock
	{// @endlock
		$$('container_upload').toggle();
	};// @lock

	button_show.click = function button_show_click (event)// @startlock
	{// @endlock
		vuuid=$$('richTextUUID').getValue();
		sources.customerPicture.query("uuidvar=:1", vuuid)
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("backButton1", "click", backButton1.click, "WAF");
	WAF.addListener("buttonOK", "click", buttonOK.click, "WAF");
	WAF.addListener("buttonClear", "click", buttonClear.click, "WAF");
	WAF.addListener("imagebody", "click", imagebody.click, "WAF");
	WAF.addListener("selectType", "change", selectType.change, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("buttonCustomer", "click", buttonCustomer.click, "WAF");
	WAF.addListener("button_upload", "click", button_upload.click, "WAF");
	WAF.addListener("button_show", "click", button_show.click, "WAF");
// @endregion
};// @endlock
