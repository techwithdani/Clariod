import useWindowDimension from "../hooks/useWindowDimension";
import Menu from "./Menu";

const NavBar = () => {
  const getWidth = useWindowDimension();

  return (
    <>
      <nav>
        <header className="flex justify-between items-center text-white py-6 px-6 md:px-16 lg:px-28 bg-darkBlue drop-shadow-md">
          <div className="flex justify-center items-center gap-1.5">
            <img src="/logo.png" alt="Claroid" />
            <h1 className="cursor-pointer">Clariod</h1>
          </div>
          {getWidth.width < 1024 ? (
            <Menu />
          ) : (
            <div className="flex justify-center items-center">
              <ul className="lg:flex items-center gap-4 font-semibold text-base">
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
          )}
        </header>
      </nav>
    </>
  );
};

export default NavBar;
