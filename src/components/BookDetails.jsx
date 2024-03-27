import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const book = useLoaderData();
  console.log(book);
  return (
    <div className="hero lg:py-8 lg:px-20 bg-base-200 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="" className="lg:max-w-lg rounded-lg shadow-2xl" />
        <div className="pt-4">
          <h1 className="text-4xl font-bold">Book Name</h1>
          <button className="btn mt-4 text-white font-medium bg-[#23BE0A]">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
