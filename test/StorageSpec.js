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
    var id = storage.addData(data);
    obj = storage.getData(id);
    console.log(obj);
    expect(typeof storage.getData(id)).toEqual("object");
  })
});