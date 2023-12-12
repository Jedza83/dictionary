import { FaRegPlayCircle } from "react-icons/fa";

function Keyboard({ word, pronunciation, searchTerm }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl my-10 font-bold">{searchTerm}</h1>
        <div className="flex-grow"></div>
        <FaRegPlayCircle size={45} className="text-purple-600" />
      </div>
      <h3 className="text-purple-600 mr-4">{pronunciation}</h3>
    </div>
  );
}

export default Keyboard;
