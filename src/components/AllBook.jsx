import { useEffect, useState } from "react";
import StoredBook from "./StoredBook";

const AllBook = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/book.json")
      .then((res) => res.json())
      .then((book) => setBooks(book));
  }, []);
  return (
    <div className="mt-16">
      <h1 className="text-3xl font-bold text-center mb-10 underline">Books</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10">
        {books.map((book) => (
          <StoredBook key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBook;
