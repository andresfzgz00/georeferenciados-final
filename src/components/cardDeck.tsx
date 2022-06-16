
import { FC } from "react";
import { Row, Container } from "react-bootstrap";

import Card from '../components/card'
import Product from '../models/Product'

interface CardDeckProps {
    items: Product[],
    onClickButton: (item: Product) => void,
    buttonText?: string,
    buttonColor?: string
}

const CardDeck: FC<CardDeckProps> = ({ items, onClickButton, buttonText, buttonColor }) => {
    return (
        <Row md="4" xs="2" sm="3">
            {items.map(item => <Card imageUrl={item.image} price={item.price} title={item.name} key={item.id} quantity={item.quantity} onClickButton={() => { onClickButton(item) }} buttonText={buttonText} buttonColor={buttonColor} id={item.id} />)}
        </Row>
    )
};

export default CardDeck;