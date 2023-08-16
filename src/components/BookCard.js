import "./BookCard.css";

const BookCard = ({ key, title, price, discount, genre, img, addToCart }) => {
  return (
    <div class="bookCard">
      <img src={img} alt={title} />
      <div class="book-detail">
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
      </div>
    </div>
  );
};

export default BookCard;
