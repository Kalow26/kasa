const LodgeTags = ({ tags, variant = "black" }) => {
  const colorVariant = [
    {
      name: "black",
      classname: "tags--black",
    },
    {
      name: "white",
      classname: "tags--white",
    },
  ];

  const variantClass = colorVariant.find((color) => color.name === variant);
  const className = variantClass
    ? variantClass.classname
    : colorVariant[0].classname;

  return (
    <ul className={`tags`}>
      {tags.map((tag, index) => (
        <li key={index} className={` ${className}`}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default LodgeTags;
