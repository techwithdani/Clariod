import heroImg1 from "../assets/heroImg1.jpg";
import heroImg2 from "../assets/heroImg2.jpg";

const HeroSection = () => {
  return (
    <>
      <section>
        <div className="bg-darkBlue text-white text-balance w-full pt-8 md:flex flex-wrap justify-evenly">
          <div className="w-96 pl-8 mt-6 md:pl-21 md:w-1/2 lg:w-1/2 lg:pl-21">
            <h1 className="text-4xl font-semibold md:text-[3.10rem] lg:text-7xl xl:text-7xl">Discover The Vision</h1>
          </div>
          <div className="w-96 pl-8 mt-6 md:pl-0 md:w-1/2 lg:w-1/2 lg:pl-0">
            <p className="text-[1.13rem] md:text-[1.40rem] lg:text-2xl xl:text-3xl">
              Welcome to Clariod, where innovation meets excellence. We are
              dedicated to providing cutting-edge solutions that streamline your
              processes & elevate your business.
            </p>
            <div className="mt-8">
              <button>Learn More</button>
            </div>
          </div>
          <div className="w-full mt-16 overflow-hidden md:flex">
            <img src={heroImg1} alt="Hero Img 1" className="md:w-1/2"/>
            <img src={heroImg2} alt="Hero Img 2" className="md:w-1/2"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
