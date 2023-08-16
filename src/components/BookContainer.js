import { useDispatch, useSelector } from "react-redux";
import BookCard from "./BookCard";
import "./BookContainer.css";

import { setCartItem } from "../redux/cart/cartActions";

const BookContainer = ({ bookList }) => {

  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  
  const addToCartHandler = (item) => {
    const quantity =
      cartItems?.length && cartItems.find((ele) => ele.id === item.id)?.quantity
        ? cartItems.find((ele) => ele.id === item.id).quantity + 1
        : 0;

    const cartItemPayload = quantity
      ? cartItems.map((ele) => {
          if (ele.id === item.id) {
            return {
              ...ele,
              quantity: quantity,
            };
          }
          return { ...ele };
        })
      : cartItems?.length
      ? [...cartItems, { ...item, quantity: 1 }]
      : [{ ...item, quantity: 1 }];

    console.log("quantity:", cartItemPayload.length);
    dispatch(setCartItem(cartItemPayload));
  };

  return (
    <div class="book-container">
      {bookList.map((item) => (
        <BookCard
          key={item.id}
          title={item.title}
          price={item.price}
          discount={item.discount}
          genre={item.genre}
          img={item.cover}
          addToCart={() => addToCartHandler(item)}
        />
      ))}
    </div>
  );
};
export default BookContainer;
