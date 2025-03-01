const TechnologySectionImg = ({ Image, title, subTitle }) => {
  return (
    <>
      <figure>
        <div className="pl-8 mt-8">
          <img src={Image} alt={title} className="h-40 w-72 object-cover" />
          <div className="mt-2">
            <p className=" text-[1.1rem]">{title}</p>
            <p>{subTitle}</p>
          </div>
        </div>
      </figure>
    </>
  );
};

export default TechnologySectionImg;
