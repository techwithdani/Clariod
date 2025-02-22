const NavBar = () => {
  return (
    <>
      <nav>
        <header className="flex justify-between items-center text-white py-6 px-8 md:px-32 bg-darkBlue drop-shadow-md">
          <img src="/logo.png" alt="Claroid" />
          <ul className=" hidden xl:flex items-center gap-12 font-semibold text-base">
            <li>About</li>
            <li>Technology</li>
            <li>Press Kit</li>
            <li>Contact</li>
          </ul>
        </header>
      </nav>
    </>
  );
};

export default NavBar;
