import HorizontalLine from "./HorizontalLine";
import quoteImg from "../assets/quoteImg.png";

const QuoteSection = () => {
  return (
    <>
      <section>
        <div>
          <div>
            <h1>Quote</h1>
          </div>
          <HorizontalLine />
          <div>
            <p>
              &quot;Clariod has truly transformed our business operations. Their
              innovative software solutions have increased our efficiency and
              productivity, allowing us to focus on what truly matters – driving
              growth and success.&quot;
            </p>
          </div>
          <div>
            <img src={quoteImg} alt="Quote Image" />
            <p>Rona El, CEO & Vailu</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuoteSection;
