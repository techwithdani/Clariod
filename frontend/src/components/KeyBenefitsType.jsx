const KeyBenefitsType = ({ image, title, subTitle, paragraph }) => {
  return (
    <>
      <div className="pl-8 mt-6 md:pl-17 lg:pl-29 xl:flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={image} alt={title} />
          <h3 className="text-2xl">{title}</h3>
        </div>
        <div className="mt-8">
          <p className="text-[1.2rem] lg:text-[1.4rem]">{subTitle}</p>
        </div>
        <div className="my-5 pr-20 lg:pr-40 xl:w-1/2">
          <p className="text-[1.1rem] lg:text-[1.3rem]">{paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default KeyBenefitsType;
