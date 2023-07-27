import express from "express"
import { connectionDb } from "./DB/connection.js"
import { Prouter } from "./modules/product/product.router.js"
import { router } from "./modules/user/user.router.js"
const app =express()
const port= 5000
const baseURL ='/api/v2'


app.use(express.json())

connectionDb()

app.use(`${baseURL}/user` ,router)
app.use(`${baseURL}/product`,Prouter)




app.listen(port,()=>{
    console.log(`running-----${port}`);
})