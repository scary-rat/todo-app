import React, { useEffect, useRef } from "react";
import { FaFileCode, FaTimes } from "react-icons/fa";
import { motion, useDragControls } from "framer-motion";
import axios from "axios";
import baseUrl from "../utils/constants";

const Cards = ({ constraintContainer, databaseData, setPostUpdated }) => {
    const [open, setOpen] = React.useState({});
    const [edit, setEdit] = React.useState({});
    const [hasClass, setHasClass] = React.useState(false);
    const [updatedData, setUpdatedData] = React.useState({
        title: "",
        description: "",
    });
    const controls = useDragControls();

    const titleInput = useRef(null);

    const deletePost = (e) => {
        let deleteButtonId = e.target.getAttribute("data-id");
        console.log(deleteButtonId);

        axios
            .delete(`${baseUrl}/delete/${deleteButtonId}`)
            .then((res) => {
                setPostUpdated((prev) => !prev);
                console.log(res.data);
            })
            .catch((error) => {
                console.log("Error deleting the task", error);
            });
    };

    const modalHandler = (e, cardId) => {
        console.log(cardId);
        setOpen((prev) => {
            const allFalse = Object.keys(prev).reduce((accumulator, key) => {
                accumulator[key] = false; // Set each key's value to false
                return accumulator;
            }, {});
            return {
                ...allFalse,
                [cardId]: !prev[cardId],
            };
        });
        setEdit((prev) => {
            const setAllFalse = Object.keys(prev).reduce((accumulator, key) => {
                accumulator[key] = false;
                return accumulator;
            }, {});
            return {
                ...setAllFalse,
            };
        });
        console.log(open);
    };

    const onChangeHandler = (e) => {
        let name = e.target.name;
        setHasClass((prev) => false);
        setUpdatedData((prev) => {
            return {
                ...prev,
                [name]: e.target.value,
            };
        });
    };

    const editHandler = (e, cardId, cardTitle, cardDescription) => {
        setEdit((prev) => {
            const setAllFalse = Object.keys(prev).reduce((accumulator, key) => {
                accumulator[key] = false;
                return accumulator;
            }, {});
            return {
                ...setAllFalse,
                [cardId]: !prev[cardId],
            };
        });

        setHasClass((prev) => !prev);

        setUpdatedData({
            title: cardTitle,
            description: cardDescription,
        });

        setTimeout(() => {
            titleInput.current.focus();
        }, 100);
    };

    const updateHandler = (e, cardId) => {
        axios
            .put(`${baseUrl}/update/${cardId}`, updatedData)
            .then((res) => {
                console.log(res.data);
                setPostUpdated((prev) => {
                    return !prev;
                });

                setOpen((prev) => {
                    const allFalse = Object.keys(prev).reduce((accumulator, key) => {
                        accumulator[key] = false; // Set each key's value to false
                        return accumulator;
                    }, {});
                    return {
                        ...allFalse,
                        [cardId]: !prev[cardId],
                    };
                });
            })
            .catch((error) => {
                console.log("error editing the task", error);
            });
    };

    return (
        <div className="card-container flex flex-wrap gap-[2.5%] gap-y-7">
            {databaseData.length > 0 ? (
                databaseData.map((cardData, index) => {
                    return (
                        <React.Fragment key={index}>
                            <motion.div
                                drag
                                dragConstraints={constraintContainer}
                                whileDrag={{ scale: 1.08, cursor: "grabbing" }}
                                key={index}
                                dragTransition={{ bounceStiffness: 69, bounceDamping: 10 }}
                                dragControls={controls}
                                className="card cursor-grab z-20 relative 2xl:w-[18%] xl:w-[28%] md:w-[48%] w-[100%] h-72 rounded-[35px] bg-zinc-900/90 text-white overflow-hidden"
                            >
                                <div className="card-body p-5">
                                    <div className="icons flex justify-between items-center mb-5">
                                        <FaFileCode size="18px" />
                                        <div
                                            data-id={`${cardData._id}`}
                                            onClick={(e) => {
                                                deletePost(e);
                                            }}
                                            className="delete flex justify-center cursor-pointer items-center bg-red-900 w-[30px] h-[30px] rounded-sm"
                                        >
                                            <FaTimes className="text-[12px] pointer-events-none" />
                                        </div>
                                    </div>
                                    <h4 className="title capitalize mb-3 text-[18px]">
                                        {cardData.title.substring(0, 20)}
                                        {cardData.title.length > 19 ? "..." : ""}
                                    </h4>
                                    <p className="description text-[14px] text-gray-400">
                                        {cardData.description.substring(0, 69)} {cardData.description.length > 69 ? "..." : ""}
                                    </p>
                                </div>
                                <div className="card-button absolute w-full bottom-0 left-0 ">
                                    <div className="size-icon px-5 flex justify-between items-center mb-7">
                                        <h6 className="size text-[12px]">
                                            <span>
                                                Last updated date : {cardData.updatedAt.substring(8, 10)}/
                                                {cardData.updatedAt.substring(5, 7)}/{`${cardData.updatedAt.substring(0, 4)} `}{" "}
                                            </span>{" "}
                                            <br />
                                            <span className="text-[12px]">{`Last updated time : ${cardData.updatedAt.substring(
                                                11,
                                                16
                                            )} `}</span>
                                        </h6>
                                        <h6 className="bg-blue-600/60 flex justify-center text-xs items-center rounded-full w-[20px] h-[20px]">
                                            {index + 1}
                                        </h6>
                                    </div>
                                    <button
                                        data-id={`${cardData._id}`}
                                        className={`w-full h-10 ${
                                            open[cardData._id] ? "bg-blue-700/40" : "bg-green-700/40"
                                        }  text-white`}
                                        onClick={(e) => modalHandler(e, cardData._id)}
                                    >
                                        {/* object ko key access garnu xa with variable then object[variable_with_key]
                                javascript script ma dynamic key access garna yesto garni ho

                                // open.cardData._id vneko ta open object vitra cardData key vitra _id key ko value

                                const kaz_variable = "kaz"
                                const obj = { 
                                    "foo": "bar", "baz": 42, kaz: false 
                                };
                                console.log(obj.kaz_variable);

                                // baulako manxe jasto testo try greko rahixu since 1 hour
                                 */}
                                        {open[cardData._id] ? "Close" : "View more"}
                                    </button>
                                </div>
                            </motion.div>
                            {open[cardData._id] && (
                                <div className="modal-box fixed bg-zinc-900 z-50 p-10 rounded-xl top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] md:w-[700px] w-[100%] h-[500px]">
                                    <div className="modal-content">
                                        <div
                                            data-id={`${cardData._id}`}
                                            onClick={(e) => {
                                                modalHandler(e, cardData._id);
                                            }}
                                            className="close absolute -top-[10px] right-[10px] flex justify-center cursor-pointer items-center text-white bg-red-500 w-[30px] h-[30px] rounded-sm"
                                        >
                                            <FaTimes className="text-[12px] pointer-events-none" />
                                        </div>
                                        <div className="title-box mb-10">
                                            <input
                                                className={`block ${
                                                    hasClass ? "blinking" : "no-blinking"
                                                } text-[35px] capitalize p-0 bg-transparent text-white w-full`}
                                                type="text"
                                                name="title"
                                                ref={titleInput} // Attach the ref here
                                                value={edit[cardData._id] ? updatedData.title : cardData.title}
                                                disabled={!edit[cardData._id]}
                                                onChange={edit[cardData._id] ? (e) => onChangeHandler(e) : undefined}
                                            />
                                        </div>
                                        <div className="description-box h-[300px]">
                                            <textarea
                                                className={`block ${
                                                    hasClass ? "blinking" : "no-blinking"
                                                } p-0 h-full resize-none overflow-auto overflow-y-scroll bg-transparent normal-case text-gray-400 w-full`}
                                                type="text"
                                                name="description"
                                                value={edit[cardData._id] ? updatedData.description : cardData.description}
                                                disabled={!edit[cardData._id]}
                                                onChange={edit[cardData._id] ? (e) => onChangeHandler(e) : undefined}
                                            >
                                                {edit[cardData._id] ? updatedData.description : cardData.description}
                                            </textarea>
                                        </div>
                                        <div className="edit-button">
                                            {edit[cardData._id] ? (
                                                <>
                                                    <button
                                                        onClick={(e) => updateHandler(e, cardData._id)}
                                                        className="bg-blue-600 text-white me-4 rounded-md px-10 py-3"
                                                    >
                                                        Save
                                                    </button>
                                                    <button
                                                        onClick={(e) =>
                                                            editHandler(e, cardData._id, cardData.title, cardData.description)
                                                        }
                                                        className="bg-red-700 text-white rounded-md px-10 py-3"
                                                    >
                                                        Cancle
                                                    </button>
                                                </>
                                            ) : (
                                                <button
                                                    onClick={(e) =>
                                                        editHandler(e, cardData._id, cardData.title, cardData.description)
                                                    }
                                                    className="bg-green-700 text-white rounded-md px-10 py-3"
                                                >
                                                    Edit
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* <div className="modal-box absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[500px]">
                            <div className="modal-content">
                                <input className="block h-[50px] w-full" type="text" value={cardData.title} disabled />
                                <input className="block h-[400px] w-full" type="text" value={cardData.description} disabled />
                            </div>
                        </div> */}
                        </React.Fragment>
                    );
                })
            ) : (
                <div className="no-task bg-zinc-900/100 rounded-2xl mx-auto w-[100%] md:w-[500px] min-h-[100px] p-10 text-center">
                    <h3 className="heading text-white text-[14px]">No Task found, Create one now !</h3>
                </div>
            )}
        </div>
    );
};

export default Cards;
