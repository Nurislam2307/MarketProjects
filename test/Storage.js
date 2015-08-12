function StoragePr() {
  this._ListOfData = {};
  this._idCounter = makeId();
  this._ListOfData.deleted = false;
}

StoragePr.prototype.addData = function(data) {
  var id = this._idCounter();
  var localData = data;
  localData.id = id;
  this._ListOfData[id] = localData;
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
  } else {return "Error, obj was not found";
}
}

StoragePr.prototype.deleteDataTotaly = function(id) {
  delete this._ListOfData[id];
}

StoragePr.prototype.search = function(key, value) {
  var result = new Array();
  var item;
  var flag = false;
  for (item in this._ListOfData){
    if (this._ListOfData[item][key] === value) {
      flag = true;
      result.push(this._ListOfData[item]);
    }
  }
  if (flag) {
    return result;
  } else {
    return "Error, data was not found";
  }
}

StoragePr.prototype.searchId = function(key, value) {
  var result = new Array();
  var item;
  for (item in this._ListOfData){
    if (this._ListOfData[item][key] === value) {
      result = +item;
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