import React from "react";
import Image from "next/image";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

export default function AiModal({ isOpen, onOpenChange }) {
  return (
    <>
      <Modal
        scrollBehavior="inside"
        className="bg-primary-white"
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center gap-1 border-b-2">
                <Image
                  src="/assets/images/logo.svg"
                  alt="logo"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <p className="font-poppins font-medium text-[1.1rem] text-primary-black uppercase tracking-widest">
                  Promptify
                </p>
              </ModalHeader>
              <ModalBody className="flex flex-col justify-center gap-8 items-center py-12 px-2">
                <h1 className="text-gray-dark text-center text-[0.9rem] font-opensans tracking-wide">
                  Experience GPT powered playground on the GO
                </h1>
                <p className="text-gray-dark text-center text-[0.6rem] font-opensans tracking-wide">
                  Coming Soon...
                </p>
              </ModalBody>
              <ModalFooter className="flex-start border-t-2">
                <p className="text-[0.7rem] text-gray-dark font-poppins tracking-wide">
                  Copyright 2023 Promptify
                </p>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
