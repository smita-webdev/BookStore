import express from 'express';
import pkg from 'body-parser';
import cors from 'cors';
import bookRoutes from './routes/books.js';
const { json } = pkg;

const app = express();
const PORT = process.env.PORT || 3005;

app.use(json());
app.use(cors());


app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
