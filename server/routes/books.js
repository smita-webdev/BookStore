
import { Router } from 'express';
const router = Router();

// Sample in-memory book data
let books = [
    {
      id: "b1",
      title: "Book1",
      price: 700,
      genre: "fictional",
      quantity: 0,
      cover: 'book1.jpg',
    },
    {
      id: "b2",
      title: "Book2",
      price: 550,
      genre: "history",
      cover: 'book2.jpg',
      quantity: 0,
    },
    {
      id: "b3",
      title: "Book3",
      price: 450,
      discount: 400,
      genre: "geography",
      cover: 'book3.jpg',
      quantity: 0,
    },
  ];

// Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// Get a specific book
router.get('/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
});

// Add a new book
router.post('/', (req, res) => {
  const newBook = { id: books.length + 1, title: req.body.title };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book
router.put('/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });
  book.title = req.body.title;
  res.json(book);
});

// Delete a book
router.delete('/:id', (req, res) => {
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
  if (bookIndex === -1) return res.status(404).json({ message: 'Book not found' });
  books.splice(bookIndex, 1);
  res.json({ message: 'Book deleted' });
});

export default router;
