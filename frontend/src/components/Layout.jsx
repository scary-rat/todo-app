import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Background from "./Background";

const Layout = () => {
    return (
        <>
            <div className="wrapper relative px-5 w-full h-[100%] min-h-[calc(100vh-120px)] bg-zinc-800">
                <Navbar></Navbar>
                <Background></Background>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default Layout;
