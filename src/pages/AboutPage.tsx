import { useEffect, useState } from "react";
import PageHero from "../components/common/PageHero";
import { aboutList } from "../utils/about";
import { Footer } from "../components";

const AboutPage = () => {
  const [list, setList] = useState(aboutList);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div id="about">
        <PageHero title="about" />
        <div className="container mx-auto mt-4 mb-12">
          {list.map((item, idx) => (
            <article
              key={idx}
              className={`flex flex-col-reverse gap-10 md:flex-row my-6 ${
                (idx + 1) % 2 === 0 ? "md:flex-row-reverse " : ""
              }`}
            >
              <div className="aboutImage md:w-1/2">
                <img
                  className="h-[450px] max-sm:h-[350px] object-cover rounded-xl"
                  src={item.image}
                  alt="image"
                />
              </div>
              <div className="aboutInfo w-full md:w-1/2 md:p-6 py-6 flex flex-col justify-center">
                <h2 className="text-4xl max-sm:text-3xl mb-8">{item.title}</h2>
                <p className="text-lg !leading-loose max-sm:text-base">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
