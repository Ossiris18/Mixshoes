import { Router } from "express";
import { getDataCart,postDataCart, putDataCart, deleteDataCart } from "../controllers/women.controller.js";

const router = Router();

router.get("/api/women", getDataCart);
router.post("/api/women", postDataCart);
router.put("/api/women", putDataCart);
router.delete("/api/women", deleteDataCart);


export default router;