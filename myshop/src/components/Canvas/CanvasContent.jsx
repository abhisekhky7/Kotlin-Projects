import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../../myRedux/cartSlicer";

function CanvasContent() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeCart(item));
  };

  let price = 0;
  return (
    <div
      className="offcanvas offcanvas-end"
      style={{ backgroundColor: "#E3E6E6" }}
      tabIndex="-1"
      id="cartOffcanvas"
      aria-labelledby="cartOffcanvasLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="cartOffcanvasLabel">
          Your Cart
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        {/* Your cart items and details here */}
        <div style={{ border: "2px solid purple", padding: "4px" }}>
          {cart.length > 0 ? (
            <div className="p-2">
              {cart.map((item) => {
                price += item.price;
                return (
                  <div className="d-flex  m-2 p-1" key={item.id} style={{border:"1px solid purple"}}>
                    <img src={item.image} alt="" style={{ maxHeight: 100 }} />
                    <h6 style={{fontWeight:700}} className="ms-2 ">
                      {item.title}
                      <br />
                      <br />
                      <span style={{fontWeight:600}}> Price: ${item.price}</span>
                    </h6>
                    <div className="d-flex" style={{ alignItems: "end" }}>
                      <button
                        onClick={() => handleRemove(item)}
                        className="btn btn-outline-danger btn-sm"
                      >
                        X
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <h2 style={{fontWeight:500}}className="d-flex justify-content-center">
              Your Cart is Empty
            </h2>
          )}
          <div className="d-flex justify-content-end p-2">
            {price > 0 ? <p style={{fontWeight:700}}> Total : ${price} </p> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CanvasContent;
