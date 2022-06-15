import { Card, Button } from 'react-bootstrap';
import { FC } from 'react';

interface CardProps {
    title: string,
    price: number,
    imageUrl: string,
    buttonColor?: string,
    buttonText?: string
}

const CardComponent: FC<CardProps> = ({ title, price, imageUrl, buttonColor = 'primary', buttonText = 'Comprar' }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price}</Card.Text>
                <Button variant={buttonColor}>{buttonText}</Button>
            </Card.Body>
        </Card>
    )
};

export default CardComponent;