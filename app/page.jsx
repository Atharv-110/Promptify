import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
    Discover, Share & Create
      <br className='' />
      <span className='gray_gradient text-center max-sm:text-4xl'>AI-Driven Prompts</span>
    </h1>
    <p className='desc text-center'>
    Your cutting-edge prompting tool for exploring, crafting, and sharing ingenious prompts in the modern world of creativity and AI interaction.
    </p>

    <Feed />
  </section>
);

export default Home;
