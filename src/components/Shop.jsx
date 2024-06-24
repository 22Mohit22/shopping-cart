import Product from "./Product";
import "../styles/shopstyles.css"
import { useEffect } from "react";
import { useState } from "react";

export default function Shop() {

    const [data, setData] = useState(null);
    const [categories, setCategories] = useState(null);
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> (console.log(data), setData(data)))
    },[])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(category => (console.log(category), setCategories(category)))
    }, [])

    return (
        <div className="shop-area">
            <select name="categories" id="categories">
                <option value="all">all</option>
                {categories? categories.map(cat => <option value={cat}>{cat}</option>) : <option value={'none'}>No option available</option>}
            </select>
            <div className="product-con">
                {data ? data.map(product =>
                        <Product key={product.id} name={product.title} img={product.image} price={product.price} ratings={product.rating.rate} procat={product.category} />
                    ) : <h1>Loading Products...</h1>}
            </div>
        </div>
    )
}