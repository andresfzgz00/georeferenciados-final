import { Card, Button, Col } from 'react-bootstrap';
import { FC } from 'react';

import Product from '../models/Product'

interface CardProps {
    title: string,
    price: number,
    imageUrl: string,
    buttonColor?: string,
    buttonText?: string,
    quantity: number,
    onClickButton: () => void,
    id?: string
}

const CardComponent: FC<CardProps> = ({ title, price, imageUrl, buttonColor = 'primary', buttonText = 'Comprar', quantity, onClickButton, id}) => {
    return (
        <Col className='mb-3' key={id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imageUrl}  />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>${price.toFixed(2)}</Card.Text>
                    <Card.Text>Cantidad: {quantity}</Card.Text>
                    <Button variant={buttonColor} active={!!quantity} onClick={onClickButton}>{buttonText}</Button>
                </Card.Body>
            </Card>
        </Col>
    )
};

export default CardComponent;