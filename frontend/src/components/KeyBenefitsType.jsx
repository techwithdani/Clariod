const KeyBenefitsType = ({ image, title, subTitle, paragraph }) => {
  return (
    <>
      <div className="pl-8 mt-6">
        <div className="flex items-center gap-3">
          <img src={image} alt={title} />
          <h3 className="text-2xl">{title}</h3>
        </div>
        <div className="mt-8">
          <p className="text-[1.2rem]">{subTitle}</p>
        </div>
        <div className="mt-4 pr-10">
          <p className="text-[1.1rem]">{paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default KeyBenefitsType;
