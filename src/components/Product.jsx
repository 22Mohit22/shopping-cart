import "../styles/productstyles.css"

export default function Product({name, price, img, ratings, procat}) {

    function limitText(text, maxwords) {
        const words = text.split(' ');
        if (words.length <= maxwords) {
            return text;
        }
        return words.slice(0, maxwords).join(' ') + '...';
    }
    
    return (
        <div className="product-card" procat={procat}>
            <div className="img-con">
                <img src={img} alt={name} />
            </div>
            <h2>{limitText(name, 3)}</h2>
            <h2>Price {price}$</h2>
            <h3>Ratings - {ratings}</h3>
            <div className="cart-con">
                <button className="buy-btn">Buy Now</button>
                <button className="add-cart-btn">Add to Cart</button>
            </div>
        </div>
    )
}