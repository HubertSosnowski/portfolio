import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="nav">
            <div className="nav-list">
                <Link to="#">
                    <a href="#" className="nav-option">
                        Home
                    </a>
                </Link>
                <Link to="#about">
                    <a href="#" className="nav-option">
                        About
                    </a>
                </Link>
                <Link to="#contact">
                    <a href="#" className="nav-option">
                        Contact
                    </a>
                </Link>
            </div>
            <div className="nav-name">
                <h1 className="nav-name-display">Hubert Sosnowski</h1>
            </div>
        </nav>
    );
}
