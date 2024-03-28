import { Link } from "react-router-dom";
import bannerImage from "../assets/book-8.png";

const Hero = () => {
  return (
    <div className="hero lg:py-8 lg:px-20 bg-base-200 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImage} className="lg:max-w-lg rounded-lg shadow-2xl" />
        <div className="pt-4">
          <h1 className="text-4xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <Link
            to="/listBooks"
            className="btn mt-4 text-white font-medium bg-[#23BE0A]"
          >
            View The List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
