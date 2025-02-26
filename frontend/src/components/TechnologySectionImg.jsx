const TechnologySectionImg = ({ Image, title, subTitle }) => {
  return (
    <>
      <figure>
        <div>
          <img src={Image} alt={title} />
          <div>
            <p>{title}</p>
            <p>{subTitle}</p>
          </div>
        </div>
      </figure>
    </>
  );
};

export default TechnologySectionImg;
