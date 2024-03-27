import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import PropTypes from "prop-types";

const SingleBook = ({ book }) => {
  const { bookId, bookName, author, image, tags, category, rating } = book;
  return (
    <Link
      to={`/book/${bookId}`}
      className="mx-auto group w-full hover:no-underline focus:no-underline border-2 rounded-md p-2"
    >
      <div className="w-full bg-gray-200 py-4 rounded-md">
        <img
          role="presentation"
          className="object-cover w-[150px] m-auto rounded h-44"
          src={image}
        />
      </div>
      <div className="mt-4">
        {tags.map((tag, idx) => (
          <span key={idx} className="ml-4">
            #{tag}
          </span>
        ))}
      </div>
      <div className="p-6 space-y-2 flex flex-col">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold">{bookName}</h3>
          <span className="text-xs font-medium">By : {author}</span>
        </div>
        <div className="flex justify-between border-t border-dashed pt-2">
          <p>{category}</p>
          <p className="inline-flex items-center gap-2">
            {rating} <FaRegStar />
          </p>
        </div>
      </div>
    </Link>
  );
};

SingleBook.propTypes = {
  book: PropTypes.object,
};

export default SingleBook;
