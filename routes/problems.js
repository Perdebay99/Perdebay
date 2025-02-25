import express from "express";
import { addProblem, getProblems, putProblem,deleteProblem } from "../controllers/problems.js";

const router = express.Router();

router.get("/", getProblems);

router.post("/", addProblem);

router.put("/:id", putProblem);

router.delete("/:id", deleteProblem);

export default router;
