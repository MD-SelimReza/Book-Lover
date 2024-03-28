import { ScaleLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className={`flex mt-10 h-screen justify-center items-center `}>
      <ScaleLoader size={100} color="#F92FD3" />
    </div>
  );
};

export default Loader;
