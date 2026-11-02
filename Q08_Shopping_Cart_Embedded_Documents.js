// Q8. Shopping Cart using embedded documents
use NoSQL_Lab3;
db.carts.drop();

db.carts.insertOne({
  cartId: 1,
  customerId: 101,
  items: [
    { productId: 1, name: "Keyboard", price: 800, quantity: 1 },
    { productId: 2, name: "Mouse", price: 500, quantity: 2 }
  ]
});

// 1. Display the cart
db.carts.find({ cartId: 1 });

// 2. Add a product to the cart
db.carts.updateOne(
  { cartId: 1 },
  { $push: { items: { productId: 3, name: "USB Drive", price: 400, quantity: 1 } } }
);

// 3. Change quantity of Mouse to 3
db.carts.updateOne(
  { cartId: 1, "items.productId": 2 },
  { $set: { "items.$.quantity": 3 } }
);

// 4. Remove Keyboard from the cart
db.carts.updateOne(
  { cartId: 1 },
  { $pull: { items: { productId: 1 } } }
);

// 5. Calculate cart value: sum of price * quantity
db.carts.aggregate([
  { $match: { cartId: 1 } },
  { $unwind: "$items" },
  { $group: {
      _id: "$cartId",
      cartTotal: { $sum: { $multiply: ["$items.price", "$items.quantity"] } }
  } }
]);

// 6. Display updated cart
db.carts.find({ cartId: 1 });
