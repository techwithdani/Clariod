import HorizontalLine from "./HorizontalLine";
import quoteImg from "../assets/quoteImg.png";

const QuoteSection = () => {
  return (
    <>
      <section>
        <div className="bg-darkBlue text-white lg:pt-50">
          <div className="pt-15 pl-8 md:pl-17 lg:pl-29">
            <h1 className="text-4xl font-semibold lg:text-5xl xl:text-[4rem]">Quote</h1>
          </div>
          <HorizontalLine />
          <div className="mt-8 pl-8 pr-10 md:pl-17 md:pr-30 lg:pl-29 lg:pr-30 xl:ml-85">
            <p className="text-[1.2rem] lg:text-[1.4rem] xl:text-2xl">
              &quot;Clariod has truly transformed our business operations. Their
              innovative software solutions have increased our efficiency and
              productivity, allowing us to focus on what truly matters – driving
              growth and success.&quot;
            </p>
          </div>
          <div className="pl-8 mt-6 flex items-center gap-3 md:pl-17 lg:pl-29 xl:ml-85">
            <img src={quoteImg} alt="Quote Image" />
            <p>Rona El, CEO & Vailu</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuoteSection;
