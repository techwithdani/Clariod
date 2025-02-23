import heroImg1 from "../assets/heroImg1.jpg";
import heroImg2 from "../assets/heroImg2.jpg";

const HeroSection = () => {
  return (
    <>
      <section>
        <div className="bg-darkBlue h-auto w-full text-white">
          <div>
            <h1>Discover The Vision</h1>
          </div>
          <div>
            <p>
              Welcome to Clariod, where innovation meets excellence. We are
              dedicated to providing cutting-edge solutions that streamline your
              processes & elevate your business.
            </p>
            <button>Learn More</button>
          </div>
          <div>
            <img src={heroImg1} alt="Hero Img 1" className="h-auto w-full" />
            <img src={heroImg2} alt="Hero Img 2" className="h-auto w-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
