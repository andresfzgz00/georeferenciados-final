import { useAppSelector as useSelector } from "../redux/store";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";

import { addToCart } from "../redux/cart";
import Product from "../models/Product";
import CardDeck from "../components/cardDeck";

const StorePage = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();



    const clickButtonHandler = (product: Product) => {
        dispatch(addToCart(product));
    };

    const purchaseHandler = () => {

    }
    return (
        <CardDeck items={products} onClickButton={clickButtonHandler} />
    )
};

export default StorePage