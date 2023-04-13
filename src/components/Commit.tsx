import React from "react";
import { commit } from "../utils/commit";

const Commit = () => {
  return (
    <div id="commit" className="container mx-auto flex items-center flex-col">
      <div className="commit_title mb-20 relative w-full flex items-center justify-center before:absolute before:top-1/2 before:w-full before:h-1" >
        <h1 className="border-spacing-y-0.5 border-solid border-blue-950 px-2 py-3.5 inline-block bg-slate-300 capitalize text-center">Our commitment</h1>
      </div>
      <div className="commitList flex gap-12">
        {commit.map((item, idx) => (
          <article key={idx} className="commit_item flex flex-col items-center">
            <img src={item.image} alt="image" className="w-1/2 h-auto mb-7"/>
            <h3 className="text-base text-center">{item.title}</h3>
            <p className="complementary mb-5">{item.complementary}</p>
            <p className="text-center">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Commit;
