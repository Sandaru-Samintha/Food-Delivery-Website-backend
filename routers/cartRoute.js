import express from "express"
import { addToCart,removeFromCart,getCart } from "../controllers/cartController.js"

const cartRouter = express.Router();

cartRouter.post("/add",addToCart)
cartRouter.post("remove",removeFromCart)
cartRouter.post("/get",getCart)

export default cartRouter;