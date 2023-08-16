import { Link } from "react-router-dom";
import "./Header.css";
import Form from "./Form";

import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cartItem = useSelector((state) => state.cart.cartItems);
  console.log("cartItem:", cartItem);
  return (
    <>
      <div className="header">
        <div class="sub-header">
          <h1>BookShelf e-Library</h1>
          <input type="text" placeholder="Search by title or author"></input>
          <div class="logos">
            <div className="signIn_detail">
              <div class="signIn-title">SignIn</div>
              <div onClick={() => setIsOpen(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="grey"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
              </div>
            </div>
            <div className="cart_detail">
              <div class="cart-title">Cart</div>
              <div className="cart-info">
                <Link className="cart-logo" to="/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="grey"
                    class="bi bi-cart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </Link>
                {cartItem && cartItem?.length ? (
                  <div className="cart-count">{cartItem.length}</div>
                ) : (
                  <div className="cart-count">0</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div class="sub-header1">
          *Reading practice feature is now available in select books in Tools
          for beginning readers. The microphone needs to be turned on to hear
          you, yet won‘t keep anything you say.
        </div>
      </div>
      {isOpen ? (
        <div
          style={{
            display: "flex",
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 6,
          }}
          id="backdrop"
        >
          <div
            style={{
              padding: "20px",
              boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              background: "white",
            }}
            id="modal-content"
          >
            <div style={{ display: "flex", justifyContent: "end" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-circle"
                viewBox="0 0 16 16"
                onClick={() => setIsOpen(false)}
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
            <div>
              <Form />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default Header;
