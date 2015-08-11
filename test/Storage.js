function StoragePr() {
  this._ListOfData = {};
  this._idCounter = makeId();
  this._ListOfData.deleted = false;
}

StoragePr.prototype.addData = function(data) {
  var id = this._idCounter();
  this._ListOfData[id] = data;
  return id;
}

StoragePr.prototype.getData = function(id) {
  // var checkDeleted = this._ListOfData[id] && this._ListOfData[id].deleted;
  if (!this._ListOfData[id].deleted)
  return this._ListOfData[id];
}

StoragePr.prototype.updateData = function(id, data) {
  this._ListOfData[id] = data;
  return id;
}

StoragePr.prototype.deleteData = function(id) {
  if (id in this._ListOfData) {
    this._ListOfData[id].deleted = true;
  }
}

StoragePr.prototype.deleteDataTotaly = function(id) {
  delete this._ListOfData[id];
}

StoragePr.prototype.search = function(key, value) {
  var result = new Array();
  var item;
  for (item in this._ListOfData){
    if (this._ListOfData[item][key] === value) {
      result.push(this._ListOfData[item]);
    }
  }
  return result;
}

function makeId() {
  var currentCounter = 1;
  function counter() {
    return currentCounter++;
  }
  return counter;
}