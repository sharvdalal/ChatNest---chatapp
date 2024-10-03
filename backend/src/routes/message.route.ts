import express from "express"

const router = express.Router();

router.get('/conversations', (req,res) => {
    res.send("hello")
} )

export default router