import { useLoaderData } from "react-router-dom";
import SingleBookDetails from "../components/SingleBookDetails";

const DetailsBook = () => {
  const books = useLoaderData();
  return (
    <div className="mt-16">
      <h1 className="text-3xl font-bold text-center mb-6">Books</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10">
        {books.map((book) => (
          <SingleBookDetails key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default DetailsBook;
