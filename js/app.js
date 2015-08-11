require (...)

Shop.create({name: "shop21"});
Shop.create({name: "shop1"});

shop = Shop.get(1);
shop2 = Shop.getByName("shop21");

product = Product.create();
shop.products << product;

shop.products.create({title: "123"});
shop.addProduct({title:})

ShopService.addProduct(shop, product)

Market.GetAllProducts()