import CartItemModel from "./cartItems.model.js";

export class CartItemsController {
  add(req, res) {
    const { productID, quantity } = req.query;
    const userID = req.userID;
    console.log(userID, "in add cart items");
    CartItemModel.add(productID, userID, quantity);
    res.status(201).send("Cart is updated");
  }
  get(req, res) {
    const userID = req.userID;
    console.log(userID, "in get cart items");
    const cartItems = CartItemModel.get(userID);
    res.status(200).send(cartItems);
  }
}
