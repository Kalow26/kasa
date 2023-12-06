import HousingCard from "./HousingCard";

const HousingCards = ({ title, cover, id, index }) => {
  const animationDelay = 10;

  return (
    <div
      className="card"
      style={{ animationDelay: `${index * animationDelay}ms` }}
    >
      <HousingCard title={title} cover={cover} id={id} />
    </div>
  );
};

export default HousingCards;
