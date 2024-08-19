import ToDoModel from "../models/todo.model.js";

const getToDos = async (req, res) => {
    const todos = await ToDoModel.find();
    res.send(todos)
}

const postToDo = async (req, res) => {
    const { title, description } = req.body;
    try {
        const task = await ToDoModel.create({
            title: title,
            description,
        })
        console.log("successfully created");
        res.status(201).send(task);
    }
    catch (error) {
        res.status(400).send(`Unable to create a task ${error}`);
    }
}

const updateToDo = async (req, res) => {
    const { id } = req.params
    const { title, description } = req.body
    try {

        const updatedTask = await ToDoModel.findOneAndUpdate({ _id: id }, { title: title, description: description })
        console.log(updatedTask)
        // detailed explanation in curd.js
        if (!updatedTask) {
            console.log(`Task with id ${id} not found.`)
            return res.status(404).send(`Task with id ${id} not found.`);
        }
        console.log("successfully updated")
        res.send(updatedTask);
    }
    catch (error) {
        res.status(404).send(`Unable to find and update the task with id ${id} ${error}`);
    }
}

const deleteToDo = async (req, res) => {
    const { id } = req.params
    try {
        const deletedTask = await ToDoModel.findOneAndDelete(id)
        console.log("successfully deleted")
        res.send(deletedTask);
    }
    catch (error) {
        res.status(404).send(`Unable to find and delete the task with id ${id}, ${error}`);
    }
}

export { getToDos, postToDo, updateToDo, deleteToDo }