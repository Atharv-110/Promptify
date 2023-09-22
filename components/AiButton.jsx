"use client";

import Image from "next/image";
import { useDisclosure } from "@nextui-org/react";
import AiModal from "@components/Modals/AiModal";

const AiButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <button
        onClick={onOpen}
        className="fixed bottom-[25px] right-[25px] bg-primary-black w-[50px] rounded-full p-3 shadow-[rgba(0,0,0,0.3)_0px_1px_8px_0px,rgba(0,0,0,0.3)_0px_2px_15px_4px] transition-all duration-150 hover:scale-90 lg:bottom-[50px] lg:right-[50px] lg:w-[60px]"
      >
        <Image
          src="https://ik.imagekit.io/picg4q9lv/Promptify/assistant_stars.svg?updatedAt=1695419005659"
          priority={true}
          width={50}
          height={50}
          alt="ai-button"
        />
      </button>
      <AiModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};

export default AiButton;
