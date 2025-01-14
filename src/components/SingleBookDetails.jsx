import PropTypes from "prop-types";
import { saveBook, saveWish } from "../utils";

const SingleBookDetails = ({ book }) => {
  const {
    image,
    bookName,
    author,
    category,
    tags,
    rating,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  const handleReadBook = (book) => {
    saveBook(book);
  };
  const handleWishlist = (book) => {
    saveWish(book);
  };

  return (
    <div>
      <div className="bg-gray-200 p-5 size-full flex justify-center items-center rounded-lg">
        <img src={image} alt="" className="w-60 h-72" />
      </div>
      <div className="mt-5">
        <div>
          <h1 className="text-4xl font-bold mb-2">{bookName}</h1>
          <p className="font-medium">By: {author}</p>
        </div>
        <hr className="my-3" />
        <p className="font-medium">{category}</p>
        <hr className="my-3" />
        <div className="space-y-2">
          <p>
            <span className="font-bold">Review: </span>
            {review}
          </p>
          <p>
            <span className="font-bold mr-4">Tags:</span>
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="mr-10 bg-gray-100 font-medium py-1 px-3 rounded-full text-[#23BE0A]"
              >
                #{tag}
              </span>
            ))}
          </p>
        </div>
        <hr className="my-3" />
        <div className="flex gap-8">
          <p className="flex flex-col gap-2">
            <span>Number of pages:</span>
            <span>Publisher:</span>
            <span>Year of publishing:</span>
            <span>Rating:</span>
          </p>
          <p className="flex flex-col font-bold gap-2">
            <span>{totalPages}</span>
            <span>{publisher}</span>
            <span>{yearOfPublishing}</span>
            <span>{rating}</span>
          </p>
        </div>
        <div className="flex gap-3 mt-3 ">
          <button
            onClick={() => handleReadBook(book)}
            className="btn border-2 px-5 bg-transparent border-[#23BE0A] hover:bg-[#59C6D2] hover:text-white"
          >
            Read
          </button>
          <button
            onClick={() => handleWishlist(book)}
            className="btn border-2 px-5 bg-transparent border-[#23BE0A] hover:bg-[#59C6D2] hover:text-white"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

SingleBookDetails.propTypes = {
  book: PropTypes.object,
};

export default SingleBookDetails;
