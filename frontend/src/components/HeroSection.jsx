import heroImg1 from "../assets/heroImg1.jpg";
import heroImg2 from "../assets/heroImg2.jpg";
import Button from "./Button";

const HeroSection = () => {
  return (
    <>
      <section>
        <div className="bg-darkBlue text-white text-balance w-full pt-6 md:flex flex-wrap justify-evenly">
          <div className="w-96 pl-8 md:w-1/2 md:pl-17 lg:pl-29 xl:pr-21 2xl:pr-52">
            <h1 className="text-4xl font-semibold md:text-[3.10rem] lg:text-6xl xl:text-7xl">
              Discover The Vision
            </h1>
          </div>
          <div className="w-96 mt-8 pl-8 md:w-1/2 md:mt-1 md:pl-0 md:pr-21 xl:pr-39 2xl:pr-52">
            <p className="text-[1.13rem] md:text-[1.30rem] lg:text-[1.40rem] xl:text-2xl">
              Welcome to Clariod, where innovation meets excellence. We are
              dedicated to providing cutting-edge solutions that streamline your
              processes & elevate your business.
            </p>
            <div className="mt-10">
              <Button text={"Learn More"} />
            </div>
          </div>
          <div className="w-full mt-16 overflow-hidden md:flex">
            <img src={heroImg1} alt="Hero Img 1" className="md:w-1/2" />
            <img src={heroImg2} alt="Hero Img 2" className="md:w-1/2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
