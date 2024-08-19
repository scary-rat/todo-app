import React, { useEffect, useRef } from "react";
import Cards from "./Cards";
import AddNotes from "./AddNotes";
import axios from "axios";
import baseUrl from "../utils/constants";

const Home = () => {
    const constraintContainer = useRef();
    const [databaseData, setDatabaseData] = React.useState([]);
    const [fileSize, setFileSize] = React.useState([]);
    const [postUpdated, setPostUpdated] = React.useState(false);
    useEffect(() => {
        axios
            .get(`${baseUrl}/get`)
            .then((res) => {
                setDatabaseData((prev) => {
                    const randomSize = [];
                    for (let i = 0; i < res.data.length; i++) {
                        let randomNumber = Math.floor(Math.random() * 99);
                        randomSize.push(randomNumber);
                    }
                    setFileSize(randomSize);

                    return res.data;
                });
            })
            .catch((error) => {
                console.log("Not able to fetch data from backend", error);
            });
    }, [postUpdated]);
    return (
        <div className="home-page min-h-[calc(100vh-140px)] pb-10 mb-5" ref={constraintContainer}>
            <div className="the-container mt-[120px]">
                <AddNotes setPostUpdated={setPostUpdated}></AddNotes>
                <Cards
                    setPostUpdated={setPostUpdated}
                    databaseData={databaseData}
                    fileSize={fileSize}
                    constraintContainer={constraintContainer}
                ></Cards>
            </div>
        </div>
    );
};

export default Home;
