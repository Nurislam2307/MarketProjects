var Client = function (clientData) {
  this._name = clientData.name;
  this._wallet = clientData.wallet;
  this._adress = clientData.adress;
  // this._phoneNumber = clientData.phoneNumber;
  // this._mail = clientData.mail;
  // // this._password = clientData.password;
};

Client.prototype.refund = function (amount) {
  check = typeof amount;
  if ( check != "number") {
    return "Error: value must be number";
  }
  this._wallet += amount;
  return this._wallet;
};

// Client.get = function (id) {
// };

Client.prototype.getWallet = function() {
  return this._wallet;
};

Client.createFromData = function (clientData) {
  var client = new Client(clientData);
  return client;
};