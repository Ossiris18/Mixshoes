import { Router } from "express";
import { getDataCart,postDataCart, putDataCart, deleteDataCart } from "../controllers/cart.controller.js"

const router = Router();

router.get("/api/cart", getDataCart);
router.post("/api/cart", postDataCart);
router.put("/api/cart", putDataCart);
router.delete("/api/cart", deleteDataCart);


export default router;