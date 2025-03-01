const TechnologySectionImg = ({ Image, title, subTitle }) => {
  return (
    <>
      <figure>
        <div className="pl-8 mt-8 md:pl-17">
          <img
            src={Image}
            alt={title}
            className="h-60 w-[30rem] object-cover pr-8"
          />
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
