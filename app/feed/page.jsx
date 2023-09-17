import React from "react";
import Feed from "@components/Feed";

const FeedPage = () => {
  return (
    <section className="w-full mt-[5.5rem] flex-center flex-col">
      <h1 className="head_text text-center">
        Discover, Share & Create
        <br className="" />
        <span className="gray_gradient text-center">AI-Driven Prompts</span>
      </h1>
      <p className="desc text-center">
        Your cutting-edge prompting tool for exploring, crafting, and sharing
        ingenious prompts in the modern world of creativity and AI interaction.
      </p>
      <Feed />
    </section>
  );
};

export default FeedPage;
