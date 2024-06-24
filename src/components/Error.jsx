import { useNavigate } from "react-router"

export default function Error() {
    const navigate = useNavigate();
    function shop() {
        navigate("/shop")
    }
    return (
        <div>
            <h1>Oops! The page you are looking for is not available</h1>
            <button className="btn" onClick={shop} >Shop Something</button>
        </div>
    )
}