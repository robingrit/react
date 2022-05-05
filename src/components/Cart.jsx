import React from "react";

export default function Cart(props) {
  const { cartItems, onAdd, changeC, logged } = props;
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  function buy() {
    alert("Grattis du köpte allt");
    logged();
    changeC();
  }
  return (
    <div className="block col-1">
      <h2>Cart items</h2>
      <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div> {/* <button onClick={() => onAdd(item)}>+</button> */}</div>
          <div>
            {item.qty} x ${item.price}
          </div>
        </div>
      ))}
      <div className="row">
        <div className="col-2">Item Price</div>
        <div className="col-1 text-right">${itemPrice.toFixed(2)}</div>
      </div>

      <button onClick={buy}>Buy </button>
    </div>

    /* <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div> */
  );
}
