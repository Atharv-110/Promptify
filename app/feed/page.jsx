"use client";
import Feed from "@components/Feed";
import AiButton from "@components/AiButton";

const FeedPage = () => {
  return (
    <section className="container flex-center flex-col">
      <h1 className="head_text text-left">
        <span className="head_text_gradient">Feed.</span>
      </h1>
      <p className="desc text-center">
        Your cutting-edge prompting tool for exploring, crafting, and sharing
        ingenious prompts in the modern world of creativity and AI interaction.
      </p>
      <Feed />
      <AiButton />
    </section>
  );
};

export default FeedPage;
