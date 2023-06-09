import React from "react";
import { commit } from "../../../utils/commit";

const Commit = () => {
  return (
    <div
      id="commit"
      className="container mx-auto flex items-center flex-col pt-16 pb-10"
    >
      <div className="commit_title mb-10 relative w-full flex items-center justify-center  before:border-solid before:absolute  before:border-b-2  before:border-b-background before:top-1/2 before:w-full before:h-1">
        <h1 className=" border-solid border-background border-2 text-2xl px-2 py-3.5 inline-block z-[5] bg-slate-300 capitalize text-center">
          Our commitment
        </h1>
      </div>
      <div className="commitList grid gap-12 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {commit.map((item, idx) => (
          <article
            key={idx}
            className="commit_item flex flex-col items-center flex-1"
          >
            <img src={item.image} alt="image" className="w-2/5 h-auto mb-7" />
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
