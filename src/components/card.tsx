import { Card, Button, Col } from 'react-bootstrap';
import { FC } from 'react';

import './card.css';

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
        <Col className='mb-3 ' key={id}>
            <Card className='h-100'>
                <Card.Img variant="top" src={imageUrl} className="h-50"  />
                <Card.Body className='card-text'>
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