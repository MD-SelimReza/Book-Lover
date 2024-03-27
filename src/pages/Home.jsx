import { Outlet, useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import SingleBook from "../components/SingleBook";
const Home = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div>
      <div>
        <Hero />
      </div>
      <section className="">
        <h1 className="text-3xl font-bold text-center mb-6">Books</h1>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <SingleBook key={book.bookId} book={book} />
          ))}
        </div>
      </section>
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
