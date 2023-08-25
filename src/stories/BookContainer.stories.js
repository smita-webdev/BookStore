import BookContainer from "../components/BookContainer";
import book1Cover from "../images/book1.jpg";
import book2Cover from "../images/book2.jpg";
import book3Cover from "../images/book3.jpg";

export default {
  title: "Example/BookContainer",
  component: BookContainer,

  //tags: ["autodocs"],

  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const BookList = [
  {
    id: "b1",
    title: "Book1",
    price: 700,
    genre: "fictional",
    quantity: 0,
    cover: book1Cover,
  },
  {
    id: "b2",
    title: "Book2",
    price: 550,
    genre: "history",
    cover: book2Cover,
    quantity: 0,
  },
  {
    id: "b3",
    title: "Book3",
    price: 450,
    discount: 400,
    genre: "geography",
    cover: book3Cover,
    quantity: 0,
  },
];

export const Primary = {
  args: {
    bookList: BookList,
  },
};
