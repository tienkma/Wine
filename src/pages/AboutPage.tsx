import { useState } from "react";
import PageHero from "../components/PageHero";
import { aboutList } from "../utils/about";

const AboutPage = () => {
  const [list, setList] = useState(aboutList);
  return (
    <div id="about">
      <PageHero title="about" />
      <div className="contentAbout">
        {list.map((item, idx) => (
          <article key={idx} className={`flex ${(idx + 1) % 2 ===0 ? "flex-row-reverse text-white bg-slate-500" : ""}`}>
            <div className="aboutImage w-1/2">
              <img src={item.image} alt="image" />
            </div>
            <div className="aboutInfo w-1/2">
              <h2 className="text-4xl mb-8">{item.title}</h2>
              <p className="text-lg">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
