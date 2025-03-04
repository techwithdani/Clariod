import TechnologySectionImg from "../components/TechnologySectionImg";
import techImg1 from "../assets/techImg1.jpg";
import techImg2 from "../assets/techImg2.jpg";
import techImg3 from "../assets/techImg3.jpg";
import techImg4 from "../assets/techImg4.jpg";
import techImg5 from "../assets/techImg5.jpg";
import techImg6 from "../assets/techImg6.jpg";
import HorizontalLine from "./HorizontalLine";

const TechnologySection = () => {
  return (
    <>
      <section>
        <div className="bg-darkBlue text-white lg:pt-50">
          <div className="pt-15 pl-8 md:pl-17 lg:pl-29">
            <h1 className="text-4xl font-semibold lg:text-5xl xl:text-[4rem]">
              Technology
            </h1>
          </div>
          <div className="pl-8 pt-10 md:pl-17 lg:pl-29">
            <p className="text-2xl">Innovative Solutions</p>
          </div>
          <div className="pt-4 pl-8 text-balance pr-10 md:pl-17 md:pr-32 lg:pl-29 lg:pr-50 lg:mb-15 xl:pr-96">
            <p className="text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem]">
              Our technology stack is designed to meet the diverse needs of
              modern businesses. From cloud-based applications to AI-driven
              analytics, we leverage the latest technologies to deliver seamless
              and effective solutions.
            </p>
          </div>
          <HorizontalLine />
          <div className="pl-8 pr-2 mt-6 sm:flex flex-wrap items-center gap-4 md:pl-17 lg:pl-29 xl:pr-51">
            <TechnologySectionImg
              Image={techImg1}
              title={"Cloud Services"}
              subTitle={"Scalable Solutions"}
            />
            <TechnologySectionImg
              Image={techImg2}
              title={"AI Integration"}
              subTitle={"Smart Automation"}
            />
            <TechnologySectionImg
              Image={techImg3}
              title={"Data Security"}
              subTitle={"Protecting Your Information"}
            />
            <TechnologySectionImg
              Image={techImg4}
              title={"Mobile Optimization"}
              subTitle={"On-the-Go Access"}
            />
            <TechnologySectionImg
              Image={techImg5}
              title={"Customer Support"}
              subTitle={"Dedicated Assistance"}
            />
            <TechnologySectionImg
              Image={techImg6}
              title={"Scalability"}
              subTitle={"Growing with You"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologySection;
