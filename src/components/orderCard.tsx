import { FC } from "react";
import { Card } from "react-bootstrap"

import Order from "../models/Order";

interface OrderCardProps {
    order: Order
}

const OrderCard: FC<OrderCardProps> = ({ order }) => {
    return (
        <Card className="mb-3">
            <Card.Header>{order.date.toLocaleString()}</Card.Header>
            <Card.Body>
            <Card.Title>${order.amount}</Card.Title>
                {order.products.map(product => <Card.Text>{product.quantity} - {product.name} - ${product.quantity * product.price}</Card.Text>)}
            </Card.Body>
        </Card>
    )
}

export default OrderCard;