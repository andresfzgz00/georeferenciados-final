import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./components/navbar";
import CartPage from "./pages/cartPage";
import StorePage from "./pages/storePage";
import OrdersPage from "./pages/ordersPage";
import store from "./redux/store";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Container className="mt-4">
          <Routes>
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/" element={<StorePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
