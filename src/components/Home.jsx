import { useNavigate } from "react-router";
import "../styles/homestyles.css"
import Arrow from "./Arrow";

export default function Home() {

    const navigate = useNavigate();

    function loadShop() {
        navigate("/shop");
    }

    return (
        <div className="home">
            <p className="headline">
                Discover Your Perfect Style - Shop Trendy, Affordable Fashion at Your Fingertips!
            </p>

            <button className="shop-btn" onClick={loadShop}>
                <span className="shopBtn-text">Shop Now</span> <Arrow />
            </button>
        </div>
    )
}