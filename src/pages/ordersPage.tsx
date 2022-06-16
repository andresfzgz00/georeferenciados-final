import { useAppSelector as useSelector } from "../redux/store";

import OrderCard from "../components/orderCard";

const OrdersPage = () => {
    const orders = useSelector(state => state.orders)


    return (
        <>
            {orders.map(order => <OrderCard order={order} />)}
        </>
    )
};

export default OrdersPage;