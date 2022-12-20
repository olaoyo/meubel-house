import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation.component";
import Home from "./components/routes/home/Home";
import Shop from "./components/routes/shop/Shop";
import Details from "./components/routes/details/Details";
import Cart from "./components/routes/cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/furniture/:furnitureId" element={<Details />} />
        <Route path="/cart/" element={<Cart />} />
        <Route path="/cart/:furnitureId" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
