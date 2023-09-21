import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";

export default function LoginModal({ isOpen, onOpen, onOpenChange }) {
  //   const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <>
      <Modal className="bg-primary-white" backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
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
              <ModalBody className="flex flex-col justify-center items-center py-12 px-2">
                <h1 className="text-gray-dark text-center text-[0.9rem] font-opensans tracking-wide">Experience easy sign in with Promptify via Google</h1>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      key={provider.name}
                      onClick={() => {
                        signIn(provider.id);
                      }}
                      onPress={onClose}
                      className="w-[65%] lg:w-[55%] flex gap-3 px-4 py-2 rounded-xl justify-center items-center bg-primary-black"
                    >
                      <Image
                        className="w-[32px]"
                        src="https://ik.imagekit.io/picg4q9lv/Promptify/google_logo.png?updatedAt=1695252105640"
                        alt="google-logo"
                        priority={true}
                        width={100}
                        height={100}
                      />
                      <p className="text-[0.85rem] font-opensans text-primary-white tracking-wider">Sign in with Google</p>
                    </button>
                  ))}
              </ModalBody>
              <ModalFooter className="flex-start border-t-2">
                <p className="text-[0.7rem] text-gray-dark font-poppins tracking-wide">Copyright 2023 Promptify</p>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
