const LodgeTags = ({ tags }) => {
  return (
    <ul className="lodge__content__tags">
      {tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>
  );
};

export default LodgeTags;
