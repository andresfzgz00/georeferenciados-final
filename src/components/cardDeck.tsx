
import { FC } from "react";
import { Row, Container } from "react-bootstrap";

import Card from '../components/card'
import Product from '../models/Product'

interface CardDeckProps {
    items: Product[],
    onClickButton: (item: Product | string) => void
}

const CardDeck: FC<CardDeckProps> = ({items, onClickButton}) => {
    return (
        <Container className="mt-4">
            <Row md="4" xs="2" sm="3">
                {items.map(item => <Card imageUrl={item.image} price={item.price} title={item.name} key={item.id} quantity={item.quantity} onClickButton={() => { onClickButton(item) }} />)}
            </Row>
        </Container>
    )
};

export default CardDeck;