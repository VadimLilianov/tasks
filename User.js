var User = {
	userName:"Ahmed",
	email:"asdfa@sdf.com",
	password:123456789,
	firstName:"Frodo",
	lastName:"Baggins",
	
	getFullName: function(){
	return this.firstName + " " + this.lastName;
	},
	setPassword: function(newpassword)
	{
		this.password = newpassword;
	}
}
alert(User.getFullName());
alert(User.password);
User.setPassword(987654321);
alert(User.password);
	