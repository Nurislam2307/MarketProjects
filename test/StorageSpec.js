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
    console.log(obj);//Должен показывать что лежит в данной ячейке хранилища
    var data1 = {name : "Vladislav"};
    storage.addData(data1);
    obj1 = storage.getData(2)
    console.log(obj1);
    expect(typeof storage.getData(1)).toEqual("object");
  });

  it('should search Data', function() {
    var storage = new StoragePr();
    data = {name : "Igor"};
    storage.addData(data);
    var rez = storage.searchId("name", "Igor");
    console.log(rez);
    expect(rez).toBe(1);
  });
});