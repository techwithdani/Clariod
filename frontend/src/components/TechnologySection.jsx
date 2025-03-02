import TechnologySectionImg from "../components/TechnologySectionImg";
import techImg1 from "../assets/techImg1.jpg";
import techImg2 from "../assets/techImg2.jpg";
import techImg3 from "../assets/techImg3.jpg";
import techImg4 from "../assets/techImg4.jpg";
import techImg5 from "../assets/techImg5.jpg";
import techImg6 from "../assets/techImg6.jpg";

const TechnologySection = () => {
  return (
    <>
      <section>
        <div className="bg-darkBlue text-white">
          <div className="pt-15 pl-8 md:pl-17 lg:pl-29">
            <h1 className="text-4xl font-semibold">Technology</h1>
          </div>
          <div className="pl-8 pt-10 md:pl-17 lg:pl-29">
            <p className="text-2xl">Innovative Solutions</p>
          </div>
          <div className="pt-4 pl-8 text-balance text-[1.1rem] pr-10 md:pl-17 lg:pl-29 lg:text-[1.2rem]">
            <p>
              Our technology stack is designed to meet the diverse needs of
              modern businesses. From cloud-based applications to AI-driven
              analytics, we leverage the latest technologies to deliver seamless
              and effective solutions.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-white h-0.5 mt-10 w-full"></div>
          </div>
          <div className="mt-6 md:flex flex-wrap items-center">
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
