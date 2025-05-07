import { Router } from "express";
import { getDataCart,postDataCart, putDataCart, deleteDataCart } from "../controllers/men.controller.js"

const router = Router();

router.get("/api/men", getDataCart);
router.post("/api/men", postDataCart);
router.put("/api/men", putDataCart);
router.delete("/api/men", deleteDataCart);


export default router;