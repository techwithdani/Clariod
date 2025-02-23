import heroImg1 from "../assets/heroImg1.jpg";
import heroImg2 from "../assets/heroImg2.jpg";

const HeroSection = () => {
  return (
    <>
      <section>
        <div className="bg-darkBlue text-white text-balance w-full pt-10">
          <div className="w-72 px-8">
            <h1 className="text-4xl font-semibold">Discover The Vision</h1>
          </div>
          <div className="w-96 px-8 mt-6">
            <p className="text-[1.13rem]">
              Welcome to Clariod, where innovation meets excellence. We are
              dedicated to providing cutting-edge solutions that streamline your
              processes & elevate your business.
            </p>
            <div className="mt-5">
              <button>Learn More</button>
            </div>
          </div>
          <div className="mt-10">
            <img src={heroImg1} alt="Hero Img 1" />
            <img src={heroImg2} alt="Hero Img 2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
