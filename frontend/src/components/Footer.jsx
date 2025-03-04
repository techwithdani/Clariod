const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-darkBlue text-white">
          <div className="pl-8 pt-10 md:pl-17 lg:pl-29">
            <p className="text-3xl font-semibold">Claroid</p>
            <p className="text-[1.3rem]">Discover The Vision</p>
          </div>
          <div className="pl-8 mt-6 md:pl-17 lg:pl-29">
            <p>123-986-7653</p>
            <p>claroid@gmail.com</p>
          </div>
          <div className="w-55 pl-8 mt-3 md:pl-17 md:w-65 lg:pl-29 lg:w-auto">
            <p className="">
              500 Terry Francine Street, San Francisco, CA 94158
            </p>
          </div>
          <div className="pl-8 mt-6 md:pl-17 lg:pl-29">
            <p>Privacy Policy</p>
            <p>Accessibility Statement</p>
          </div>
          <div className="pl-8 pb-5 mt-8 md:pl-17 lg:pl-29">
            <p>© 2035 by Clariod. Powered and secured by Claroid</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
