import express from "express";
const router = express.Router();

import {getAllUsers} from "../controller/users.js"

router.get("/", getAllUsers);

export default router;
