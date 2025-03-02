const TechnologySectionImg = ({ Image, title, subTitle }) => {
  return (
    <>
      <figure>
        <div className="mt-8">
          <img
            src={Image}
            alt={title}
            className="h-60 w-[30rem] object-cover sm:w-72 sm:h-[22.5rem]"
          />
          <div className="mt-4">
            <p className="text-[1.1rem]">{title}</p>
            <p>{subTitle}</p>
          </div>
        </div>
      </figure>
    </>
  );
};

export default TechnologySectionImg;
