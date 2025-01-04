import { BiArrowToLeft, BiCheckDouble } from "react-icons/bi";
import { Link } from "react-router-dom";

interface roleType {
    role: string
}

const SuccessApply = ({role}: roleType) => {
  return (
    <div className="flex space-y-5 flex-col w-fit text-center h-fit justify-center items-center mx-auto dark:text-white">
      <BiCheckDouble
        size={65}
        color="blue"
        className="bg-blue-200 p-2 rounded-full shadow-md shadow-gray-200"
      />

      <p className="text-2xl">You have successfully applied for <span className="font-medium"> {role} </span> </p>

      <Link to="/" className="text-gray-500 flex space-x-2 justify-center items-center hover:text-blue-500">
        <BiArrowToLeft size={20} />
        <span>Go back to job finder</span>
      </Link>
    </div>
  );
};

export default SuccessApply;
