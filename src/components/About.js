import React from "react";

const About = ({ image, about }) => {
  const defaultImage = "https://via.placeholder.com/215";

  return (
    <aside className="App-about">
      <img src={image || defaultImage} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
};

export default About;
