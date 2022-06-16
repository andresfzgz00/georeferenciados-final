import { useDispatch } from "react-redux";

import { useAppSelector as useSelector } from "../redux/store";
import CardDeck from "../components/cardDeck";
import { removeFromCart } from "../redux/cart";

const Home = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const clickButtonHandler = (name: string) => {
        dispatch(removeFromCart(name));
    }
    

    return (
        <CardDeck items={cart} onClickButton={clickButtonHandler} />
    )
};

export default Home;