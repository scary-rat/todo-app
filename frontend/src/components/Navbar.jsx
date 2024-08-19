import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar w-full flex fixed top-0 justify-center z-10 px-10 py-10">
            <ul className="nav">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link text-[20px] text-zinc-400">
                        Documents.
                    </NavLink>
                    {/* <NavLink to="/back" className="nav-link">
                        Back
                    </NavLink> */}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
