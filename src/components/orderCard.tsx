import { FC } from "react";
import { Card } from "react-bootstrap"

import Order from "../models/Order";

interface OrderCardProps {
    order: Order
}

const OrderCard: FC<OrderCardProps> = ({ order }) => {
    return (
        <Card className="mb-3">
            <Card.Header>{order.date.toISOString()}</Card.Header>
            <Card.Body>
            <Card.Title>${order.amount}</Card.Title>
                {order.products.map(product => <Card.Text>{product.quantity} - {product.name}</Card.Text>)}
            </Card.Body>
        </Card>
    )
}

export default OrderCard;