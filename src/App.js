import "./App.css";
import CartPage from "./components/CartPage";
import BookContainer from "./components/BookContainer";
import Header from "./components/Header";
import book1Cover from "./images/book1.jpg";
import book2Cover from "./images/book2.jpg";
import book3Cover from "./images/book3.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
// const cuponIdMap = {
//   flat50: {
//     type: "percentage",
//     value: 50,
//   },
//   flat20: {
//     type: "sum",
//     value: 20,
//   },
// };
function App() {
  // useEffect(() => {
  //   localStorage.setItem("couponCodes", JSON.stringify(cuponIdMap));
  // }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path=""
            exact
            element={<BookContainer bookList={BookList} />}
          />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
