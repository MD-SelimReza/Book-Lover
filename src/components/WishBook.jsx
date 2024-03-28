import placeHolderImage from "../assets/404.jpg";
import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";

const WishBook = ({ book }) => {
  const {
    image,
    bookName,
    author,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;
  return (
    <div className="flex relative">
      <div className="w-full group border-2 border-gray-300 p-4 hover:no-underline focus:no-underline flex items-center rounded-lg gap-10">
        <img
          role="presentation"
          className="object-cover w-[150px] p-5 bg-gray-200 rounded-lg"
          src={image || placeHolderImage}
        />
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {bookName}
          </h3>
          <p>By: {author}</p>
          <div className="flex">
            <p>
              <span className="font-bold mr-2">Tags:</span>
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="mr-4 bg-gray-100 font-medium py-1 px-3 rounded-full text-[#23BE0A]"
                >
                  #{tag}
                </span>
              ))}
            </p>
            <p className="flex items-start gap-2">
              <CiLocationOn className="size-6" /> Year of publishing:{" "}
              {yearOfPublishing}
            </p>
          </div>
          <div className="flex gap-5">
            <p className="flex items-start gap-2">
              <HiOutlineUsers className="size-6" /> Publisher: {publisher}
            </p>
            <p className="flex items-start gap-2">
              <HiOutlineDocumentChartBar className="size-6" /> Pages:{" "}
              {totalPages}
            </p>
          </div>
          <hr className="my-6" />
          <div className="flex gap-4 items-center">
            <p className="text-[#328EFF] px-3 py-1 rounded-full bg-[#328EFF26]">
              Category: {category}
            </p>
            <p className="text-[#FFAC33] px-3 py-1 rounded-full bg-[#FFAC3326]">
              Rating: {rating}
            </p>
            <button className="bg-[#23BE0A] text-white px-3 py-1 rounded-full">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

WishBook.propTypes = {
  book: PropTypes.object.isRequired,
  deletable: PropTypes.bool,
  handleDelete: PropTypes.func,
};

export default WishBook;