import React from 'react';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
 
                </div>
                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/coffee" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}>Coffee</NavLink>

                    </li>
                    <li>
                        <NavLink to="/dashboard" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}>Dashboard</NavLink>

                    </li>
                </ul>
                </div>
                <a class="btn btn-ghost text-xl">Coffee Book</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/coffee" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}>Coffee</NavLink>

                    </li>
                    <li>
                        <NavLink to="/dashboard" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}>Dashboard</NavLink>

                    </li>
                </ul>
            </div>
            <div class="navbar-end">
                <a class="btn">Pre Book</a>
            </div>
            </div>
        </div>
    );
};

export default Navbar;