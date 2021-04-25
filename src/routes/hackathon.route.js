import express from "express";
import HackathonController from "../controllers/hackathon.controller";

const router = express.Router();

router.get("/hackathon", async (req, res, next)=>{
    const listAlunos = await new HackathonController().listar();
    res.json(listAlunos);
});
router.post("/hackathon", async (req, res, next)=>{
    const response = await new HackathonController().incluir(req.body);
    res.json(response);
});

export default router;