const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-darkBlue text-white xl:grid grid-cols-4">
          <div className="w-55 pl-8 pt-10 md:pl-17 lg:pl-29">
            <div>
              <p className="text-3xl font-semibold">Claroid</p>
              <p className="text-[1.3rem]">Discover The Vision</p>
            </div>
          </div>
          <div className="w-55 pl-8 mt-6 md:pl-17 lg:pl-29 col-start-3 xl:pl-0 xl:mt-0 xl:flex items-center justify-center">
            <div>
              <p>123-986-7653</p>
              <p>claroid@gmail.com</p>
            </div>
          </div>
          <div className="w-55 pl-8 mt-3 md:pl-17 md:w-65 lg:pl-29 lg:w-auto col-start-4">
            <div>
              <p>500 Terry Francine Street, San Francisco, CA 94158</p>
            </div>
          </div>
          <div className="w-55 pl-8 mt-6 md:pl-17 lg:pl-29 row-start-2 col-start-3">
            <div>
              <p>Privacy Policy</p>
              <p>Accessibility Statement</p>
            </div>
          </div>
          <div className="w-65 pl-8 pb-5 mt-8 md:pl-17 lg:pl-29 row-start-2 col-start-4">
            <div>
              <p>© 2035 by Clariod. Powered and secured by Claroid</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
