const KeyBenefitsType = ({ image, title, subTitle, paragraph }) => {
  return (
    <>
      <div>
        <div>
          <img src={image} alt={title} />
          <h3>{title}</h3>
        </div>
        <div>
          <p>{subTitle}</p>
        </div>
        <div>
          <p>{paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default KeyBenefitsType;
