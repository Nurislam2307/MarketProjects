function Client(){

}

Client.createFromData = function(clientData){
	var client = new Client();
	client._name = clientData.name;
	client._password = clientData.password;
	client._adress = clientData.adress;
	client._phoneNumber = clientData.phoneNumber;
	client._mail = clientData.mail;
	return client;
}






















// function User() {
//   this.sayHi = function() {
//     alert(this.name)
//   };
// }

// User.createAnonymous = function() {
//   var user = new User;
//   user.name = 'Аноним';
//   return user;
// }

// User.createFromData = function(userData) {
//   var user = new User;
//   user.name = userData.name;
//   user.age = userData.age;
//   return user;
// }

// // Использование

// var guest = User.createAnonymous();
// guest.sayHi(); // Аноним

// var knownUser = User.createFromData({
//   name: 'Вася',
//   age: 25
// });
// knownUser.sayHi(); // Вася