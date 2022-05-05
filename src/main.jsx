import ReactDOM from "react-dom/client";
import { useState } from "react";

import FormMulti from "./modules/FormMulti";
import Info from "./modules/Info";
import ShopinPage from "./modules/ShopinPage";

import Products from "./components/Products/Products";
import Navbar from "./components/NavBar/NavBar";
import Cart from "./components/Cart";
function App() {
  const [userInfo, setUserInfo] = useState({});

  function changeUserInfo(newInfo) {
    setUserInfo(newInfo);
  }

  const [loggedIn, setLoggedIn] = useState(false);
  const [CartPress, setCartPress] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  function logged() {
    console.log("test");
    setLoggedIn(!loggedIn);
    console.log(loggedIn);
  }

  function changeC() {
    setCartPress(!CartPress);
  }

  return (
    <div>
      <Navbar cartItems={cartItems} changeC={changeC} />

      {/* <Info userInfo={userInfo} /> */}
      <ShopinPage
        onAdd={onAdd}
        loggedIn={loggedIn}
        logged={logged}
        CartPress={CartPress}
        cartItems={cartItems}
        changeC={changeC}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
