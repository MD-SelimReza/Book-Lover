import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NoDataAvailable = ({ message, address, label }) => {
  return (
    <div className="">
      <p className="text-gray-600 text-xl lg:text-3xl mb-5">{message}</p>

      <Link
        to={address}
        className="bg-[#23BE0A] text-white px-5 py-3 rounded-lg"
      >
        {label}
      </Link>
    </div>
  );
};

NoDataAvailable.propTypes = {
  message: PropTypes.string,
  address: PropTypes.string,
  label: PropTypes.string,
};

export default NoDataAvailable;
