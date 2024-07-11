import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage"
import Shoppage from "../pages/Shoppage"
import Cartpage from "../pages/Cartpage"
export default function Content() {
    return (
        <div className="pt-36 px-6">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/shop" element={<Shoppage />} />
                <Route path="/cart" element={<Cartpage />} />
            </Routes>
        </div>
    )
}