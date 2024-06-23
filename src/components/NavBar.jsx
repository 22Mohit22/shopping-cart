import React from "react"
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div>
            <header>
                Khareedo.com
            </header>
            <nav>
                <ul>
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="shop">Shop</Link></li>
                    <li><Link to="cart">Cart</Link></li>
                </ul>
            </nav>
        </div>
    )
}