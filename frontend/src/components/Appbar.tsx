import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  return (
    <div>
      <div className="flex justify-between px-7 py-5 border-b drop-shadow-l">
        <Link to={"/blogs"}>
          <div className="flex flex-col justify-center pl-10 cursor-pointer pt-1">
            Medium
          </div>
        </Link>
        <div className="flex justify-between">
            <Link to={"/publish"}>
          <div className="pr-8 ">
          <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Publish</button>
          </div>
          </Link>
          <div className="pt-0.5">
          <Avatar name="DHeerain Thakur" size1={"big"} />
          </div>
        </div>
      </div>
    </div>
  );
};
