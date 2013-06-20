
guidedModel =// @startlock
{
	Customer :
	{
		methods :
		{// @endlock
			registerCustomer:function(objReg)
			{// @lock
				//debugger;
				var varName;
				TheCustomer = ds.Customer.find('userName=:1', objReg.userName)
				if (TheCustomer == null) {
					TheCustomer = ds.Customer.createEntity();
				}
					TheCustomer.firstName=objReg.firstName;
					TheCustomer.middleName=objReg.middleName;
					TheCustomer.surName=objReg.surName;
					TheCustomer.userName=objReg.userName;
					TheCustomer.password=objReg.password;
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
