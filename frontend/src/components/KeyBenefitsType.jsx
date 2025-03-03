const KeyBenefitsType = ({ image, title, subTitle, paragraph }) => {
  return (
    <>
      <div className="pl-8 mt-6 md:pl-17 lg:pl-29 lg:flex justify-between items-center gap-8 lg:mt-0">
        <div className="flex items-center gap-3 lg:w-57">
          <img src={image} alt={title} />
          <h3 className="text-[1.3rem]">{title}</h3>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-50">
          <p className="text-[1.2rem]">{subTitle}</p>
        </div>
        <div className="my-5 pr-20 md:pr-40 lg:w-1/2 xl:pr-50">
          <p className="text-[1.1rem]">{paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default KeyBenefitsType;
