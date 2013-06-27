
guidedModel =// @startlock
{
	CustomerAnthro :
	{
		waistCircumference :
		{
			onGet:function()
			{// @endlock
				//debugger;
				var X;
				var Y;
				if(this.frontWaist !==null) {
					X=this.frontWaist;
					}
				if(this.backWaist !==null) {
					X=this.backWaist;
					}
				
				if(this.sideWaist !==null) {
					Y=this.sideWaist;
					}
									
				if ((X!==null) && (Y!==null)) {
				return Math.PI*Math.pow((2*(Math.pow((X*.5),2) + Math.pow((Y*.5),2))), .5)
				}
		
				
			}// @startlock
		},
		methods :
		{// @endlock
			addNew:function(custID, measurement, measuretype)
			{// @lock
				// Add your code here
				//debugger;
				d= new Date();
				var a=d.toDateString()
				var dStart=d.toISOString(); 
				var c=d.getFullYear()+'-'+ d.getDay();
				i=dStart.indexOf("T")
				var c=dStart.slice(0,i) + "T00:00:00.000Z"						
				TheCustomerAnthro = ds.CustomerAnthro.find('customer.ID=:1 and dateMeasured=:2', custID, c)				
				TheCustomer = ds.Customer.find('ID=:1', custID)
				if (TheCustomerAnthro==null) {
					TheCustomerAnthro=ds.CustomerAnthro.createEntity();
					TheCustomerAnthro.customer=TheCustomer;
				}
				switch(measuretype)
					{
						case "fw":
 						 TheCustomerAnthro.frontWaist=measurement;
 						 break;
						case "bw":
  						 TheCustomerAnthro.backWaist=measurement;
  					 	 break;
						case "sw":
  						 TheCustomerAnthro.sideWaist=measurement;
  					 	 break;  					 	 
						default:
						 break;
					}
				TheCustomerAnthro.dateMeasured=new Date();
				TheCustomerAnthro.save()
				if(TheCustomerAnthro.waistCircumference !==null) {
				return TheCustomerAnthro.waistCircumference
				}
			}// @startlock
		}
	},
	CustomerPicture :
	{
		methods :
		{// @endlock
			checkData:function(custID)
			{// @lock
				//find the contemporaneous pictures
				debugger;
				d= new Date();
				var a=d.toDateString()
				var dStart=d.toISOString(); 
				var c=d.getFullYear()+'-'+ d.getDay();
				i=dStart.indexOf("T")
				var c=dStart.slice(0,i) + "T00:00:00.000Z"				
				ThePictures = ds.CustomerPicture.query('customerID= :1', custID)
				if(ThePictures.length>0) {
				var ArrVal=ThePictures.distinctValues('picType');
				if(
				((ArrVal.indexOf("fw")>0) && (ArrVal.indexOf("sw")>0)))
				{
				X1 = ds.CustomerPicture.query('dateTaken=:1 and picType=:2', c, 'fw')
				X2 = ds.CustomerPicture.query('dateTaken=:1 and picType=:2', c, 'sw')
				//d=Math.PI*Math.pow((2*(Math.pow((X*.5),2) + Math.pow((Y*.5),2))), .5)
				}
				
				else if ((ArrVal.indexOf("bw")>0) && (ArrVal.indexOf("sw")>0))
				{
				X1 = ds.CustomerPicture.query('dateTaken=:1 and picType=:2', c, 'bw')
				X2 = ds.CustomerPicture.query('dateTaken=:1 and picType=:2', c, 'sw')
				//d=Math.PI*Math.pow((2*(Math.pow((X*.5),2) + Math.pow((Y*.5),2))), .5)				
				}
				
				else {
				console.log('not ok');	
				}
				}
				else {
				console.log('picture not found')
				}
				
			}// @startlock
		}
	},
	CameraData :
	{
		pixelsToMM :
		{
			onGet:function()
			{// @endlock
				return ((this.pixelsHighImage/this.screenHigh) * this.mmAtMeter)/1000
			}// @startlock
		},
		mmAtMeter :
		{
			onGet:function()
			{// @endlock
				return this.fieldOfView*17.45;
			}// @startlock
		}
	},
	Customer :
	{
		methods :
		{// @endlock
			registerCustomer:function(objReg)
			{// @lock
				var varName;
				TheCustomer = ds.Customer.find('userName=:1', objReg.userName)
				TheCamera=ds.CameraData.find('ID=:1', objReg.cameraTypeId);
				if (TheCustomer == null) {
					TheCustomer = ds.Customer.createEntity();
				}
					TheCustomer.firstName=objReg.firstName;
					TheCustomer.middleName=objReg.middleName;
					TheCustomer.surName=objReg.surName;
					TheCustomer.userName=objReg.userName;
					TheCustomer.password=objReg.password;
					TheCustomer.cameraType=TheCamera;
					varName = objReg.firstName + ' ' + objReg.surName
					TheCustomer.save();
					
					//add user to directory if not yet added
					
					TheNewUser = directory.internalStore.User.find('name=:1',objReg.userName );	
					if (!TheNewUser) {
						TheNewUser = directory.addUser(objReg.userName, objReg.password, varName)
						TheNewUser.putInto('User');
						directory.save();

					}			
			}// @startlock
		}
	}
};// @endlock
