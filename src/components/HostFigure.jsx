import React from "react";

const HostFigure = ({ name, src, alt }) => {
  return (
    <figure>
      <figcaption>{name}</figcaption>
      <img src={src} alt={`hôte ${alt}`} />
    </figure>
  );
};

export default HostFigure;
