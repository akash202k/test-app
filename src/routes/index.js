import { Router } from "express";

const router = Router()


router.get("/health", (req, res) => {
    console.log("Router Health is ok")
    return res.json({
        message: "Router health is okay"
    })
})

export default router;