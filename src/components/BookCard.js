import { useEffect, useState } from "react";
import "./BookCard.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Container } from "@mui/material";

import book1Cover from "../images/book1.jpg";
import book2Cover from "../images/book2.jpg";
import book3Cover from "../images/book3.jpg";

const BookCard = ({ key, title, price, discount, genre, img, addToCart }) => {
  const [isUserFetched, setisUserFetched] = useState(false);

  const bookCoverImage = {
    'book1.jpg': book1Cover,
    'book2.jpg': book2Cover,
    'book3.jpg':book3Cover
  }

  // const fetchUser = async () => {
  //   try {
  //     const getUsers = await axios.get("https://randomuser.me/");
  //     console.log(getUsers);
  //     if (getUsers) {
  //       setisUserFetched(true);
  //     }
  //   } catch (error) {
  //     setisUserFetched(false);
  //     console.log(error);
  //     Navigate("/");
  //   }
  // };
  // useEffect(() => {
  //   fetchUser();
  // }, []);

  // useEffect(() => {
  //   if (isUserFetched) {
  //     console.log("fetch 2nd");
  //   }
  // }, [isUserFetched]);
  // src/images/book1.jpg

  return (
    <div class="bookCard">
      <img src={bookCoverImage[img]} alt={title} />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "0 0 15px 15px",
        }}
      >
        <h4>{title}</h4>
        <div class="book-price">
          {discount ? (
            <>
              <div style={{ fontWeight: "bold" }}>{discount}</div>
              <div style={{ textDecoration: "line-through" }}>{price}</div>
            </>
          ) : (
            price
          )}
        </div>
        <div class="book-genre">{genre}</div>
        <div>
          <button onClick={addToCart}>Add To Cart</button>
        </div>
      </Container>
    </div>
  );
};

export default BookCard;
