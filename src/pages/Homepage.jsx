import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const Homepage = () => {
    
    const navigate = useNavigate(null)

    return <div className="text-5xl font-bold font-mono flex flex-col gap-4 justify-center items-start">
        <h1>Discover Your Perfect Style – Shop Trendy, Affordable Fashion at Your Fingertips!</h1>
        <button onClick={() => navigate('/shop')} className="flex justify-between gap-4 items-center min-w-[304px] hover:shadow-lg duration-300 p-4 border-4 rounded-2xl border-black hover:min-w-[384px]">Shop now <FaArrowRightLong /></button>
    </div> 
}

export default Homepage;