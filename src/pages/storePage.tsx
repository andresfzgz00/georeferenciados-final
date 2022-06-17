import { useEffect } from "react";

import { getProducts } from "../redux/stock";
import { useAppDispatch as useDispatch, useAppSelector as useSelector, AppDispatch } from "../redux/store";
import { addToCart} from "../redux/cart";
import Product from "../models/Product";
import CardDeck from "../components/cardDeck";

const StorePage = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    const clickButtonHandler = (product: Product) => {
        dispatch(addToCart(product));
    };

    console.log(products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])    

    return (
        <CardDeck items={products} onClickButton={clickButtonHandler} />
    )
};

export default StorePage