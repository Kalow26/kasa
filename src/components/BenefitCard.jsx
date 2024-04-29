const BenefitCard = ({ text, title, icon }) => {
  return (
    <div className="benefit__card">
      <div>{icon}</div>
      <h3 className="benefit__card__title">{title}</h3>
      <p className="benefit__card__text">{text}</p>
    </div>
  );
};

export default BenefitCard;
