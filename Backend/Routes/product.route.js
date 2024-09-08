import express from 'express'
import { createProduct, updatedProduct, deleteProduct, getProduct } from '../Controllers/product.controller.js'
const router=express.Router()
router.get("/",getProduct)
router.post("/",createProduct)
router.put("/:id", updatedProduct)
router.delete("/:id",deleteProduct)
export default router