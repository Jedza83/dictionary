import { LuBook } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";
import { RxSwitch } from "react-icons/rx";

function Header() {
  return (
    <div className="flex justify-between my-5">
      <LuBook size={30} />
      <div className="right flex ">
        <select className="mr-10">
          <option value="Serif">Serif</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <RxSwitch className="mr-3" size={30} />
        <FaRegMoon size={30} />
      </div>
    </div>
  );
}

export default Header;
