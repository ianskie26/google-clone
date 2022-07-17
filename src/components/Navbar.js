import React from "react"
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

export default function Navbar() {
    return (
        <nav className="navbar--wrapper">
            <div className="links">
                <a href="#">Gmail</a>
                <a href="#">Images</a>
                <a href="#"><AppsIcon id='appIcon' /></a>
                <a href="#" className="avatar"><Avatar>I</Avatar></a>
            </div>
        </nav>
    )
}