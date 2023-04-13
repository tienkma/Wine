import { useState } from "react";

const AboutPage = () => {
  const [list, setList] = useState(aboutList);
  return (
    <div id="about">
      <PageHero title="about" />
      <div className="contentAbout">
        {list.map((item, idx) => (
          <article key={idx}>
            <div className="aboutImage">
              <img src={item.image} alt="image" />
            </div>
            <div className="aboutInfo">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
