"use client";
// import UnderDev from "@components/UnderDev";
import Image from "next/image";

import { useDisclosure } from "@nextui-org/react";

import LoginModal from "@components/Modals/LoginModal";

const Home = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <section className="container flex-center flex-col">
      {/* <UnderDev /> */}
      <LoginModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <div className="w-full flex justify-between mt-4 flex-col items-center gap-y-8 lg:flex-row lg:items-start">
        <div className="lg:w-1/2 w-full lg:text-left text-center">
          <h1 className="head_text">
            Discover, Share & <br />
            Create
            <br className="block lg:hidden" />
            <span className="gray_gradient lg:text-left text-center">
              {" "}
              AI-Driven <br className="hidden lg:block" /> Prompts
            </span>
          </h1>
          <p className="desc w-[95%] lg:mx-0 mx-auto">
            Your cutting-edge prompting tool for exploring, crafting, and
            sharing ingenious prompts in the modern world of creativity and AI
            interaction.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            quos
          </p>

          <div className="w-full flex gap-4 mt-6 lg:justify-start justify-center">
            <button className="black_btn" onClick={onOpen}>
              Register
            </button>
            <button className="outline_btn">Explore</button>
          </div>
        </div>
        <div className="w-1/2 flex-between lg:justify-end">
          <Image
            src="https://ik.imagekit.io/picg4q9lv/Promptify/hero_section_robot_laptop.svg?updatedAt=1696440955200"
            alt="robot-svg"
            priority={true}
            width={200}
            height={200}
            className="hidden lg:block md:block w-[100%] lg:w-[65%]"
          />
          <Image
            src="https://ik.imagekit.io/picg4q9lv/Promptify/hero_section_robot_mobile.svg?updatedAt=1696440954381"
            alt="robot-svg"
            priority={true}
            width={200}
            height={200}
            className="lg:hidden md:hidden w-[100%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
