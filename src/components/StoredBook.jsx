import PropTypes from "prop-types";
const StoredBook = ({ book }) => {
  const { image, bookName } = book;
  return (
    <div>
      <div className="bg-gray-200 p-5 size-full flex justify-center items-center rounded-lg">
        <img src={image} alt="" className="w-60 h-72" />
      </div>
      <h1 className="text-xl font-medium mt-3">{bookName}</h1>
    </div>
  );
};

StoredBook.propTypes = {
  book: PropTypes.object,
};

export default StoredBook;
