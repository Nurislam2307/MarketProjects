function Shop(id, name, owner, city, telephone, mail){
	this._name = name;
	this._owner = owner;
	this._city = city;
	this._telephone = telephone;
	this._mail = mail; 
    this.sayHi = function(_name){
    	return "Good Morning " + _name;
    }
}

var flowers = new Shop('Blue rose', 'Margharet Tatcher', 
	'London', '244-34-54', 'ms.Tatcher@gmail.com');

a = flowers.sayHi();