import { useDispatch } from "react-redux";
import { Button, Container } from 'react-bootstrap';

import { useAppSelector as useSelector } from "../redux/store";
import CardDeck from "../components/cardDeck";
import { removeFromCart, clearCart } from "../redux/cart";
import Product from "../models/Product";
import { addOrder } from "../redux/orders";

import './cartPage.css'

const CartPage = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const clickButtonHandler = (product: Product) => {
        dispatch(removeFromCart(product));
    }

    const purchaseHandler = () => {
        const { amount, items } = cart;
        dispatch(addOrder({ amount, products: items }));
        dispatch(clearCart());
    }

    return (
        <>
            {!!cart.amount && (
                <div className="amount-container mt-4">

                    <h1>Cantidad: {cart.amount}</h1>
                    <Button variant="success" onClick={purchaseHandler}>Confirmar</Button>
                </div>
            )}
            <CardDeck items={cart.items} onClickButton={clickButtonHandler} buttonText={"Eliminar"} buttonColor={"danger"} />
        </>
    )
};

export default CartPage;