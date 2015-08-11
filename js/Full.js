
var Client = function (clientData) {
  this._name = clientData.name;
  this._wallet = clientData.wallet;
  this._adress = clientData.adress;
  // this._phoneNumber = clientData.phoneNumber;
  // this._mail = clientData.mail;
  // // this._password = clientData.password;
};

function VIPClient(clientData) {
  this._name = clientData.name;
  this._wallet = clientData.wallet;
  this._adress = clientData.adress;
  this.isVIP = true;
}

Client.prototype.refund = function (amount) {
  this._wallet += amount;
  return this._wallet;
};

Client.prototype.get = function () {
  return "You have " + this._wallet;
};

VIPClient.prototype.refund = function (amount) {
  this._wallet += amount;
  return this._wallet;
};

VIPClient.prototype.get = function () {
  return "You have " + this._wallet;
};

Client.createFromData = function (clientData) {
  var client;
  if (clientData.isVIP) {
    client = new VIPClient(clientData);
  } else {
    client = new Client(clientData);
  }
  return client;
};

var lord = { name : "Bayron", adress : 'London', wallet : 1000};

var Lord = Client.createFromData(lord);

console.log(Lord);

// c1 = new Client ({})
// c1.refund(100);
// c2 = new Client ({})
// c2.refund(10);

// function Shop() {
//   this.update = function...
// };

// Shop.prototype.update = function ...

// shop = new Shop();
// shop.update = function...

// shop = new Shop();
// shop.update()

// shop = Shop.create();
// Shop.update(shop);

              // function Shop(name, owner, city, telephone, mail) {
              //   this._name = name;
              //   this._owner = owner;
              //   this._city = city;
              //   this._telephone = telephone;
              //   this._mail = mail;
              //   this.sayHi = function () {
              //     return "Good Morning " + _name;
              //   };
              // }

var Item = function (data, amount) {
  this._name = data.name;
  this._amount = amount;
  this._price = data.price;
};

// var flowers = new Shop('Blue rose', 'Margharet Tatcher',
//   'London', '244-34-54', 'ms.Tatcher@gmail.com');


// var client = new Client(lord);

var throne = {name : 'Throne', price : 1000 };

var thrones = new Item(throne, 2);

function Buying(item, client, count) {
  if (item._amount < count) {
    return "Sorry, items are less than you need";
  }
  if (item._price > client._wallet) {
    return "Sorry, you don`t have enough money";
  }

  item._amount -= count;
  client._wallet -= item._price;
  //basket. add += "goods.id" + "goods.count";
  return "You have successfully purchased item for " +
    item._price + "$";

}

var Basket = [];








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

// Client.createFromData = function(clientData){
//var client = new Client();
//client._name = clientData.name;
//client._password = clientData.password;
//client._adress = clientData.adress;
//client._phoneNumber = clientData.phoneNumber;
//client._mail = clientData.mail;
//return client;
//}
