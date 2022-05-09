import express from "express";
const router = express.Router();

import { getAllUsers, getUserById, createUser, userLogin } from "../controller/users.js";

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/new", createUser);
router.post("/login", userLogin )

export default router;
