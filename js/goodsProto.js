function Goods(id, shop.id, price, name, describe, availibleCount){
	this._id = id;
	this._shopFrom = shop.id;
	this._price = price;
	this._name = name;
	this._describe = describe;
	this.availibleCount = availibleCount;
}