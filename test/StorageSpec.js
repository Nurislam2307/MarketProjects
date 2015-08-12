describe("Client", function() {
  it('should create StoragePr', function () {
    var storage = new StoragePr();
    expect(typeof storage).toEqual("object");
  });

  it('should add Data', function() {
    var storage = new StoragePr();
    data = {name : "Igor"};
    id = storage.addData(data);
    expect(id).toBe(1);
  });

  it('should get Data', function() {
    var storage = new StoragePr();
    var data = {name : "Igor"};
    storage.addData(data);
    obj = storage.getData(1);
    var data1 = {name : "Vladislav"};
    storage.addData(data1);
    obj1 = storage.getData(2)
    expect(typeof storage.getData(1)).toEqual("object");
  });

  it('should search Id by Data', function() {
    var storage = new StoragePr();
    data = {name : "Igor"};
    storage.addData(data);
    data1 = {name : "Vladislav"};
    storage.addData(data1);
    var rez2 = storage.searchId("name", "Vladislav");
    var rez1 = storage.searchId("name", "Igor");
    expect(rez2).toBe(2);
    expect(rez1).toBe(1);
  });

  it('should search all dates with given key', function() {
    var storage = new StoragePr();
    data = {name : "Igor", age : "350"};
    storage.addData(data);
    data1 = {name : "Vladislav", age : "350"};
    storage.addData(data1);
    data2 = {name : "Igor", age : "380"};
    storage.addData(data2);
    var rez = storage.search("age", "350");
    var errorControl = storage.search("age", "0");
    expect(rez).toEqual([{name: 'Igor', age: '350', id: 1}, {name: 'Vladislav', age: '350', id: 2}]);
    expect(errorControl).toEqual("Error, data was not found");
  });

  it('should totaly delete obj', function() {
    var storage = new StoragePr();
    var data2 = {name : "Marishka", age : "280"};
    storage.addData(data2);
    var delId = storage.searchId("name", "Marishka");
    storage.deleteDataTotaly(delId);
    var checkDel = storage._ListOfData[delId];
    expect(checkDel).toEqual(undefined);
  });

  it('should make obj invisible(delete)', function() {
    var storage = new StoragePr();
    var data2 = {name : "Marishka", age : "280"};
    var idToDel = storage.addData(data2);
    storage.deleteData(idToDel);
    expect(storage.getData(idToDel)).toEqual(undefined);
    expect(typeof storage._ListOfData[idToDel]).toBe("object");
    expect(typeof storage.getData(idToDel)).toBe(undefined);
  })
});