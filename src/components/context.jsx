import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState ({ children }) {

    const [productsList, setProductsList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    async function fetchProducts() {
        setLoading(true);
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const fetchedProducts = await response.json();
            setProductsList(fetchedProducts);
            setLoading(false);
        } catch (e) {
            setErr(e);
            console.log(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    function handleCartAdd(product, quantity) {
        setCart(prevCart => {
            let arr = [...prevCart];

            let newProduct = { item: product, pId: product.id, price: product.price, count: quantity };

            const indexOfProduct = arr.findIndex(item => item.pId === product.id);

            if (indexOfProduct === -1) {
                arr.push(newProduct);
            } else {
                arr[indexOfProduct] = {
                    ...arr[indexOfProduct],
                    count: arr[indexOfProduct].count + quantity,
                };
            }

            return arr;
        });
    }

    function fixName(name ='') {
        let words = name.split(' ');
        if (words.length <= 3) {
            return name;
        }
        return words.slice(0, 3).join(' ') + ' ...';
    }

    const calculateTotalQuantity = () => {
        const total =  cart ? cart.map(item => item.count) : 0;
        const count = total ? total.reduce((a, b) => a + b, 0) : 0;
        setTotalQuantity(count);
    }
    const calculateTotalPrice = () => {
        const total = cart ? cart.map(item => item.price * item.count) : 0;
        const price = parseFloat(total ? total.reduce((a, b) => a + b, 0) : 0).toFixed(2);
        setTotalPrice(price);
    }

    return <GlobalContext.Provider
        value={{
            productsList,
            setProductsList,
            loading,
            setLoading,
            err,
            setErr,
            cart,
            setCart,
            handleCartAdd,

            fetchProducts,

            fixName,
            totalPrice,
            setTotalPrice,
            totalQuantity, 
            setTotalQuantity,
            calculateTotalQuantity,
            calculateTotalPrice
            

        }}
        >
        { children }
    </GlobalContext.Provider>
}