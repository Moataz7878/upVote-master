import { Router } from "express";
import { adduser, DeleteUser, getAllUsers, namecontainsx, nameEndx, SearchUserX, signIn, updateOneMethod } from "./user.controll.js";

const router = Router()

router.post('/adduser',adduser)
router.get('/getalluser',getAllUsers)
router.get('/sinIn',signIn)
router.put('/updateUser_id/:',updateOneMethod)
router.delete('/deleteUser/:_id',DeleteUser)
router.get('/searchuserx',SearchUserX)
router.get('/nameEndx',nameEndx)
router.get('/namecontainsx', namecontainsx)









export {router}