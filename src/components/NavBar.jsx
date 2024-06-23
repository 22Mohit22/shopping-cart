import "../styles/navstyles.css"

import React from "react"
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div className="nav-container">
            <nav>
                <header>
                    <Link to="/"><h1>Khareedo.com</h1></Link>
                </header>
                <ul className="nav-links">
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="shop">Shop</Link></li>
                    <li><Link to="cart">Cart</Link></li>
                </ul>
                <ul className="acc-link">
                    <li>Mohit Pandey</li>
                    <li>Logout</li>
                </ul>
            </nav>
        </div>
    )
}