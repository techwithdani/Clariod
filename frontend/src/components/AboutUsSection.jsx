import Button from "./Button";

const AboutUsSection = () => {
  return (
    <>
      <section>
        <div className="bg-darkBlue text-white">
          <div className="pt-15 pl-8 md:pl-17 lg:pl-29 xl:pl-96">
            <h1 className="text-4xl font-semibold">About Us</h1>
          </div>
          <div className="pt-10 pl-8 md:pl-17 lg:pl-29 xl:pl-96">
            <p className="text-2xl">Our Story</p>
          </div>
          <div className="pl-8 pt-6 text-[1.1rem] text-balance md:pl-17 lg:text-[1.2rem] lg:pl-29 xl:flex justify-between items-center xl:pl-96 xl:pr-10">
            <div className="pr-10 md:pr-30 xl:pr-0">
              <p>
                Clariod is a SaaS startup committed to revolutionizing how
                businesses operate. We pride ourselves on delivering intuitive
                software solutions that simplify complex tasks and enhance
                productivity. Our goal is to empower organizations with the
                tools they need to thrive in today&apos;s business landscape.
              </p>
            </div>
            <div className="mt-6 pr-10 md:pr-30 xl:mt-0 xl:pr-0 xl:ml-5">
              <p>
                Driven by a passion for innovation, we continuously strive to
                exceed client expectations by offering scalable, efficient, and
                user-friendly solutions. At Clariod, we believe in the power of
                technology to drive success and transform the way businesses
                achieve their goals.
              </p>
            </div>
          </div>
          <div className="pl-8 pt-10 md:pl-17 lg:pl-29 xl:pl-96">
            <Button text={"Learn More"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;
