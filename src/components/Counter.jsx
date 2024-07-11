import { FaMinus, FaPlus } from "react-icons/fa";

export default function Counter({quantity, setQuantity}) {
    
    const handleCount = (e) => {
        setQuantity(e.target.value)
    }
    const add = () => {
        setQuantity(prev => prev + 1);
    }
    const minus = () => {
        setQuantity(prev => prev - 1);
    }

    return <div className="flex justify-between border-4 p-2 gap-2 rounded-md border-black items-center max-w-[140px]">
        <button onClick={minus} disabled={quantity <= 1 ? true : false} className="w-10 text-center flex justify-center text-xl hover:scale-110 duration-300" ><FaMinus /></button>
        <input type="text" value={quantity} onChange={(e) => handleCount(e)} className="w-10 text-center text-2xl font-bold focus:outline-none" disabled />
        <button onClick={add} className="w-10 text-center flex justify-center text-xl" ><FaPlus /></button>
    </div>
}