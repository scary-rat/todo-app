import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

const ToDoModel = mongoose.model("todo", toDoSchema)

export default ToDoModel;
