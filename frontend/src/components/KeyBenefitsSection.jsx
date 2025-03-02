import HorizontalLine from "./HorizontalLine";
import KeyBenefitsType from "./KeyBenefitsType";
import KeyBenefitsImg1 from "../assets/keyBenefitsImg1.png";
import KeyBenefitsImg2 from "../assets/keyBenefitsImg2.png";
import KeyBenefitsImg3 from "../assets/keyBenefitsImg3.png";

const data = {
  customization: {
    title: "Customization",
    subTitle: "Tailored Solutions",
    paragraph:
      "Our customizable solutions cater to your specific business needs, ensuring that you get the most out of our software. We work closely with you to understand your requirements and deliver personalized solutions that drive results.",
  },
  integration: {
    title: "Integration",
    subTitle: "Seamless Connectivity",
    paragraph:
      "Our software seamlessly integrates with your existing systems, promoting seamless data flow and enhancing collaboration across your organization. Enjoy a cohesive and efficient workflow with Clariod.",
  },
  analytics: {
    title: "Analytics",
    subTitle: "Actionable Insights",
    paragraph:
      "Gain valuable insights into your business performance with our advanced analytics tools. Track key metrics, identify trends, and make data-driven decisions to propel your business forward.",
  },
};

const KeyBenefitsSection = () => {
  return (
    <>
      <section>
        <div className="bg-darkBlue text-white">
          <div className="pt-15 pl-8">
            <h1 className="text-4xl font-semibold">Key Benefits</h1>
          </div>
          <div className="mt-4 pl-8">
            <p className="text-2xl">
              Experience the following benefits with Claroid:
            </p>
          </div>
          <HorizontalLine />
          <KeyBenefitsType
            image={KeyBenefitsImg1}
            title={data.customization.title}
            subTitle={data.customization.subTitle}
            paragraph={data.customization.paragraph}
          />
          <HorizontalLine />
          <KeyBenefitsType
            image={KeyBenefitsImg2}
            title={data.integration.title}
            subTitle={data.integration.subTitle}
            paragraph={data.integration.paragraph}
          />
          <HorizontalLine />
          <KeyBenefitsType
            image={KeyBenefitsImg3}
            title={data.analytics.title}
            subTitle={data.analytics.subTitle}
            paragraph={data.analytics.paragraph}
          />
          <HorizontalLine />
        </div>
      </section>
    </>
  );
};

export default KeyBenefitsSection;
