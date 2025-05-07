import { Router } from "express";
import { getCart, postCart, updateCart, deleteCart } from "../controllers/cart.controller.js";
import { getWomen, postWomen, updateWomen, deleteWomen } from "../controllers/women.controller.js";
import { getMen, postMen, updateMen, deleteMen } from "../controllers/men.controller.js";
 
const router = Router();

// Ruta cart
router.get("/cart", getCart);
router.post("/cart", postCart);
router.put("/cart", updateCart);
router.delete("/cart", deleteCart);


// Ruta women
router.get("/women", getWomen);
router.post("/women", postWomen);
router.put("/women", updateWomen);
router.delete("/women", deleteWomen);

// Ruta men
router.get("/men", getMen);
router.post("/men", postMen);
router.put("/men", updateMen);
router.delete("/men", deleteMen);

export default router;