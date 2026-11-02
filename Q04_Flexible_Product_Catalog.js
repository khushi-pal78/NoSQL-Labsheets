// Q4. Flexible Product Catalog: different product types share one collection
use NoSQL_Lab3;
db.products.drop();

db.products.insertMany([
  {
    productId: 1, name: "Dell Inspiron", category: "laptop", price: 55000,
    attributes: { ramGB: 16, storageGB: 512, processor: "Intel i5", screenInches: 15.6 }
  },
  {
    productId: 2, name: "Samsung Galaxy", category: "mobile", price: 30000,
    attributes: { ramGB: 8, storageGB: 256, cameraMP: 50, batteryMah: 5000 }
  },
  {
    productId: 3, name: "Canon EOS", category: "camera", price: 65000,
    attributes: { megapixels: 24, lens: "18-55mm", sensor: "APS-C" }
  }
]);

// 1. Display all products
db.products.find();

// 2. Find laptops with at least 16 GB RAM
db.products.find({ category: "laptop", "attributes.ramGB": { $gte: 16 } });

// 3. Find mobiles with 50 MP or higher camera
db.products.find({ category: "mobile", "attributes.cameraMP": { $gte: 50 } });

// 4. Find cameras with at least 20 megapixels
db.products.find({ category: "camera", "attributes.megapixels": { $gte: 20 } });

// 5. Find products priced below 60000
db.products.find({ price: { $lt: 60000 } });

// 6. Show only name, category and attributes
db.products.find({}, { _id: 0, name: 1, category: 1, attributes: 1 });
