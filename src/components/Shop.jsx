import "../styles/shopstyles.css"
import { useEffect, useState } from "react";
import Product from "./Product";

export default function Shop() {

    const [categories, setCategories] = useState(null);
    const [products, setProducts] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
        .then(res => res.json())
        .then(prod => setProducts(prod))
    }, [])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(category => setCategories(category))
    }, [])


    
    useEffect(() => {
        if (selectedCategory != 'all') {
            fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
            .then(res => res.json())
            .then(prod => setProducts(prod))
        } else {
            fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(prod => setProducts(prod))
        }
    }, [selectedCategory])

    function categoryWise(category) {
        setSelectedCategory(category);
    }

    return (
        <div className="shop-area">
            
            <div className="categories">
                <button onClick={() => setSelectedCategory('all')} className="category-btn">All</button>
                {categories ? categories.map(cat => <button onClick={() => categoryWise(cat)} className="category-btn" key={cat}  >{cat.toUpperCase()}</button>) : <option value={'none'}>No Categories available</option>}
            </div>
            
            <div className="product-con">
                {products ? products.map(product => <Product key={product.id} img={product.image} name={product.title} price={product.price} ratings={product.rating.rate} procat={product.category} />) : <h2>Loading products...</h2>}
            </div>
        </div>
    )
}