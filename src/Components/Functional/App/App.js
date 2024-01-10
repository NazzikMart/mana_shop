import React, { useState } from "react";
import Navbar from "../Navbar/Navbar.js";
import Footer from "../../UI/Footer/Footer.js";
import products from '../../../product.json'
import "../../../index.css";
import "../../media.css";

const App = () => {
  const [product] = useState(
    products.product
  );
  const [orders, setOrders] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [infoProducts, setInfoProducts] = useState([]);


  const addToOrder = (item) => {
    const isItemInOrder = orders.some((orderItem) => orderItem.id === item.id);

    if (!isItemInOrder) {
      setOrders([...orders, item]);
      calculateTotalCost();
    } else {
      console.log("Цей товар вже є в кошику");
    }
  };
  const updateOrders = (updatedOrders, totalCost) => {
    setOrders(updatedOrders);
    setTotalCost(totalCost);
  };
  const infoProduct = (item) => {
    setInfoProducts([item]);
  };

  const removeProduct = (productId) => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== productId)
    );
    calculateTotalCost();
  };

  const calculateTotalCost = () => {
    const total = orders.reduce((accumulator, order) => {
      return accumulator + order.price * order.counter;
    }, 0);

    setTotalCost(total);
  };


  return (
    <div className="App">
      <Navbar
        product={product}
        addToOrder={addToOrder}
        orders={orders}
        removeProduct={removeProduct}
        totalCost={totalCost}
        infoProduct={infoProduct}
        infoProducts={infoProducts}
        updateOrders = {updateOrders}
      />
      <Footer />
    </div>
  );
};

export default App;