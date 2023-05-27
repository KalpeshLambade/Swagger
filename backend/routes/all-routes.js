import { Router } from "express";
import { addUser, getAllUser, updateUser } from "../controllers/All-controllers.js";


const router = Router();

router.get('/getusers', getAllUser);
router.post('/adduser', addUser);
router.post('/updateuser',updateUser);
// router.post();
// router.post();

export default router;