const Banner = ({ name, title }) => {
  return (
    <div className={`banner ${name}`}>
      <div className="banner__overlay"></div>
      {title && (
        <div className="banner__content">
          <h1>{title}</h1>
        </div>
      )}
    </div>
  );
};

export default Banner;
