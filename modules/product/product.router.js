import { Router } from "express";
import { addproduct, DeleteProduct, getAllproduct, getAllproductsWithUsers, updateProduct } from "./product.controll.js";


const Prouter = Router()

Prouter.post('/addProduct',addproduct)
Prouter.put('/updateproduct/:_id',updateProduct)
Prouter.delete('/deleteProduct/:_id' ,DeleteProduct)
Prouter.get('/get',getAllproductsWithUsers)
Prouter.get('/getAllProduct/:_id',getAllproduct)









export {Prouter}