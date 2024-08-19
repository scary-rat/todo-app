import { Router } from "express";
import { deleteToDo, getToDos, postToDo, updateToDo } from "../controllers/todo.controller.js";

const router = Router()

router.get("/get", getToDos)

router.post("/post", postToDo)

router.put("/update/:id", updateToDo)

router.delete("/delete/:id", deleteToDo)

export default router;