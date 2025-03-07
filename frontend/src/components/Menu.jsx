import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <i className="block text-3xl cursor-pointer" onClick={onClickMenu}>
        <GiHamburgerMenu />
      </i>
      {isMenuOpen ? (
        <div className="absolute top-20 left-0 w-full h-dvh bg-darkBlue flex flex-col items-center gap-6 font-semibold text-lg">
          <li className="list-none w-full text-center p-4 hover:text-lightSlateGrey transition-all cursor-pointer">
            About
          </li>
          <li className="list-none w-full text-center p-4 hover:text-lightSlateGrey transition-all cursor-pointer">
            Technology
          </li>
          <li className="list-none w-full text-center p-4 hover:text-lightSlateGrey transition-all cursor-pointer">
            Press Kit
          </li>
          <li className="list-none w-full text-center p-4 hover:text-lightSlateGrey transition-all cursor-pointer">
            Contact
          </li>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Menu;
