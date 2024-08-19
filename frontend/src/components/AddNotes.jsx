import { motion } from "framer-motion";
import React, { useState } from "react";
import axios from "axios";
import baseUrl from "../utils/constants";

const AddNotes = ({ setPostUpdated }) => {
    const [formData, setValue] = useState({
        title: "",
        description: "",
    });
    const onChangeHandler = (e) => {
        let name = e.target.name;
        console.log(name);

        setValue((prev) => {
            return { ...prev, [name]: e.target.value };
        });
    };

    const createPost = (e) => {
        if (formData.title && formData.description) {
            e.preventDefault();
            axios
                .post(`${baseUrl}/post`, formData)
                .then((res) => {
                    setPostUpdated((prev) => {
                        return !prev;
                    });
                    console.log(res.data);
                    setValue((prev) => {
                        return { ...prev, title: "", description: "" };
                    });
                })
                .catch((error) => {
                    console.log("error creating the post", error);
                });
        }
    };

    return (
        <motion.div
            drag
            dragElastic
            dragSnapToOrigin
            whileDrag={{ scale: 1.08, cursor: "grabbing" }}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
            className="create-post cursor-grab relative z-10 w-[100%] md:w-[600px] px-5 py-5 mx-auto bg-zinc-900/50 mb-20"
        >
            <form action="/">
                <input
                    className="block bg-transparent border-b-2 text-white border-gray-500/10 text-[20px] py-3 w-full"
                    placeholder="Title for your notes..."
                    name="title"
                    onChange={onChangeHandler}
                    type="text"
                    value={formData.title}
                    required
                />
                <textarea
                    className="block bg-transparent resize-none text-gray-400 py-3 h-[200px] w-full mb-5"
                    placeholder="Notes description..."
                    name="description"
                    onChange={onChangeHandler}
                    type="text"
                    value={formData.description}
                    required
                >
                    {formData.description}
                </textarea>
                <button
                    className="block bg-green-800/60 text-white rounded-md px-10 py-3"
                    onClick={(e) => createPost(e)}
                    type="Submit"
                >
                    Create Post
                </button>
            </form>
        </motion.div>
    );
};

export default AddNotes;
