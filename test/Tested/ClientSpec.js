describe("Client", function() {
  it('should assign name to Obj', function() {
    var Lord = Client.createFromData({name: "Bayron"})
    expect(Lord._name).toBe("Bayron");
  });

  it('should create object of proper type', function() {
    var lord = { name : "Bayron", adress : 'London', wallet : 1000}
    var Lord = Client.createFromData(lord)
    expect(typeof Lord).toBe("object");
  });

  it('should refund', function() {
    var data = { name : "Bayron", adress : 'London', wallet : 1000}
    var Lord = Client.createFromData(data);
    Lord.refund(500);
    expect(Lord._wallet).toBe(1500);
  });

  it('should return value of Wallet', function() {
    var lord = { name : "Bayron", adress : 'London', wallet : 1000}
    var Lord = Client.createFromData(lord);

    expect(typeof Lord.getWallet()).toBe("number");
  });

  it('should refund if value is empty', function() {
    var lord = { name : "Bayron", adress : 'London', wallet : 1000}
    var Lord = Client.createFromData(lord);

    expect(Lord.refund()).toBe("Error: value must be number");
  });

  it('should return Error if amount not a number', function() {
    var lord = { name : "Bayron", adress : 'London', wallet : 1000}
    var Lord = Client.createFromData(lord);
    expect(Lord.refund("f")).toBe("Error: value must be number");
  })
});
