import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getMessages, sendMessage, getUsersForSidebar } from "../conrollers/message.controller.js";
const router = express.Router();
router.get('/conversations', protectRoute, getUsersForSidebar);
router.get('/:id', protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);
export default router;
