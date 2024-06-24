import App from "../App";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import Error from "./Error";

import "../styles/errorstyles.css"

const routes = [{
    path: "/",
    element: <App />,
    children: [
        { path: "/", element: <Home />},
        { path: "shop", element: <Shop />},
        { path: "cart", element: <Cart />},
    ],
    errorElement: <Error />
}]

export default routes