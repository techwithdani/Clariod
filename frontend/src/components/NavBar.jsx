import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
        <header className="flex justify-between items-center text-white py-6 px-6 md:px-16 lg:px-28 bg-darkBlue drop-shadow-md">
          <div className="flex justify-center items-center gap-1.5">
            <img src="/logo.png" alt="Claroid" />
            <h1 className="cursor-pointer">Clariod</h1>
          </div>
          <div className="flex justify-center items-center">
            <ul className=" hidden xl:flex items-center gap-4 font-semibold text-base">
              <li className="p-3 hover:text-lightSlateGrey rounded-md transition-all cursor-pointer">
                About
              </li>
              <li className="p-3 hover:text-lightSlateGrey rounded-md transition-all cursor-pointer">
                Technology
              </li>
              <li className="p-3 hover:text-lightSlateGrey rounded-md transition-all cursor-pointer">
                Press Kit
              </li>
              <li className="p-3 hover:text-lightSlateGrey rounded-md transition-all cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
          <i
            className="xl:hidden block text-3xl cursor-pointer"
            onClick={onClickMenu}
          >
            <GiHamburgerMenu />
          </i>
          <div
            className={` absolute xl:hidden top-20 left-0 w-full bg-darkBlue flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
          >
            <li className=" list-none w-full text-center p-4 hover:text-lightSlateGrey transition-all cursor-pointer">
              About
            </li>
            <li className=" list-none w-full text-center p-4 hover:text-lightSlateGrey transition-all cursor-pointer">
              Technology
            </li>
            <li className=" list-none w-full text-center p-4 hover:text-lightSlateGrey transition-all cursor-pointer">
              Press Kit
            </li>
            <li className=" list-none w-full text-center p-4 hover:text-lightSlateGrey transition-all cursor-pointer">
              Contact
            </li>
          </div>
        </header>
      </nav>
    </>
  );
};

export default NavBar;
