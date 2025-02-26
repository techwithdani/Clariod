import Button from "./Button";

const AboutUsSection = () => {
  return (
    <>
      <section>
        <div className="bg-darkBlue text-white text-balance">
          <div className="pt-16 pl-8">
            <h1 className="text-4xl">About Us</h1>
          </div>
          <div>
            <p>Our Story</p>
          </div>
          <div>
            <div>
              <p>
                Clariod is a SaaS startup committed to revolutionizing how
                businesses operate. We pride ourselves on delivering intuitive
                software solutions that simplify complex tasks and enhance
                productivity. Our goal is to empower organizations with the
                tools they need to thrive in today&apos;s business landscape.
              </p>
            </div>
            <div>
              <p>
                Driven by a passion for innovation, we continuously strive to
                exceed client expectations by offering scalable, efficient, and
                user-friendly solutions. At Clariod, we believe in the power of
                technology to drive success and transform the way businesses
                achieve their goals.
              </p>
            </div>
          </div>
          <div>
            <Button text={"Learn More"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;
