import { useEffect, useState } from "react";
import { getBooks, getWish } from "../utils";
import NoDataAvailable from "./NoDataAvailable";
import WishBook from "./WishBook";

const Wishlist = () => {
  const [books, setBooks] = useState([]);
  const [wish, setWish] = useState([]);
  useEffect(() => {
    const storedBooks = getBooks();
    setBooks(storedBooks);
    const storedWish = getWish();
    setWish(storedWish);
  }, []);

  if (books.length < 1) {
    return (
      <NoDataAvailable
        message="No Book Available"
        address="/"
        label="Back to home"
      />
    );
  }

  return (
    <section className="">
      <div className="container max-w-6xl py-6 mx-auto space-y-6 sm:space-y-12">
        <div className="flex flex-col gap-8">
          {wish.map((book) => (
            <WishBook key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
