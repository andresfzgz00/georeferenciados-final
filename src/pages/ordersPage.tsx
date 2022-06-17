import { useEffect } from "react";

import { useAppSelector as useSelector, useAppDispatch as useDispatch } from "../redux/store";
import OrderCard from "../components/orderCard";
import { getOrders } from "../redux/orders";

const OrdersPage = () => {
    const orders = useSelector(state => state.orders)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrders());
    }, [])

    return (
        <>
            {orders.map(order => <OrderCard order={order} />)}
        </>
    )
};

export default OrdersPage;