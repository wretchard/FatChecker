﻿/**) * Look for suitable index.html file in the webFolder, depending on the userAgent.  * remove all not js valid digits from the giver string * @param {Object} request The request object * @param {Object} response The response object parameter  **/function dispatchHandler ( request, response ) {	var responseTxt	if (settings.project.hostName=='localhost') {		 responseTxt='http://local.tracker.com:8081/index/'	}	else {		responseTxt='http://' + settings.project.hostName + '/index/'	}	response.headers.location=responseTxt;	return;}function UploadFat (request, response) {	var picFile	var vuserName	var measurementType	var vuuID	ThePicture=ds.CustomerPicture.createEntity()	for (var i=0; i< request.parts.length; i++)	{	switch(request.parts[i].name) {		case 'dataFile':			//nameFile=request.parts[i].fileName;			picFile=request.parts[i].asPicture;				break;		case 'userName':			vuserName=request.parts[i].asText;			break;		case 'measureType':			measurementType	=request.parts[i].asText;			break;		case 'uniqueID':			vuuID=request.parts[i].asText;			break;		}	}	TheCustomer=ds.Customer.find('userName=:1', vuserName)	ThePicture.custPic=picFile;	ThePicture.customer=TheCustomer;	ThePicture.picType=measurementType;	ThePicture.userName=vuserName;	ThePicture.uuidvar=vuuID;	ThePicture.save();	return;	}