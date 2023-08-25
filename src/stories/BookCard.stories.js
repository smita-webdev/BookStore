import BookCard from "../components/BookCard";
import book1Cover from "../images/book1.jpg";
export default {
  title: "Example/BookCard",
  component: BookCard,

  //tags: ["autodocs"],

  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Primary = {
  args: {
    id: "b1",
    title: "Book1",
    price: 700,
    genre: "fictional",
    quantity: 0,
    img: book1Cover,
  },
};
