import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch("book.json")
      .then((res) => res.json())
      .then((book) => setBook(book));
  }, []);
  console.log(book);
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!{book.length}
      </h1>
    </>
  );
}

export default App;
