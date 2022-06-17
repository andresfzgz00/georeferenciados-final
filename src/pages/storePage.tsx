import { useEffect } from "react";

import { getProducts } from "../redux/stock";
import { useAppDispatch as useDispatch, useAppSelector as useSelector, AppDispatch } from "../redux/store";
import { addToCart } from "../redux/cart";
import Product from "../models/Product";
import CardDeck from "../components/cardDeck";
import Map from "../components/map";

const StorePage = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    const clickButtonHandler = (product: Product) => {
        dispatch(addToCart(product));
    };

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <>
            <Map lat={21.1282569} lng={-101.7445455}/>
            <CardDeck items={products} onClickButton={clickButtonHandler} />
        </>
    )
};

export default StorePage