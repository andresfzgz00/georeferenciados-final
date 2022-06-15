import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Cart from "./pages/cart";
import Store from "./pages/store";
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
