import { useContext } from "react";
import { GlobalContext } from "../components/context";
import Card from "../components/Card";

const Shoppage = () => {

    const {productsList, loading, err} = useContext(GlobalContext);

    if (loading) {
        return <h1>Loading Products...</h1>
    }
    if (err) {
        console.log(err);
        return <h1>Some Error occured</h1>
    }

    return <div className="flex flex-col items-center gap-3 justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <div className="flex justify-center gap-14 flex-wrap items-center">
            {productsList && productsList.length 
            ? productsList.map( product => 
                <Card 
                key={product.id}
                title={product.title}
                imgScr={product.image}
                price={product.price}
                rating={product.rating.rate}
                wholeProduct={product}
                />
            )
            : null }
        </div>
    </div>

}

export default Shoppage;