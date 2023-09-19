"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import { useDisclosure } from "@nextui-org/react";

import LoginModal from "@components/Modals/LoginModal";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [toggleDropdownMenu, setToggleDropdownMenu] = useState(false);

  const [showNav, setShowNav] = useState(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleDropdownMenu = () => {
    setShowNav(false);
    setToggleDropdownMenu(!toggleDropdownMenu);
  };

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex-between h-[60px] items-center fixed top-0 z-20 px-4 rounded-2xl mt-3 bg-slate-400 lg:w-[75%] max-sm:w-[95%] md:w-[95%] max-sm:px-3 max-sm:h-[55px] nav_glass">
      <LoginModal isOpen={isOpen} onOpenChange={onOpenChange} />
      {/* We can implement menu bar from here */}
      <div className="sm:hidden flex relative">
        <div
          className="flex"
          onClick={() => setToggleDropdownMenu(!toggleDropdownMenu)}
        >
          <button
            type="button"
            onClick={() => setShowNav(!showNav)}
            className="cursor-pointer w-[45px] h-[45px]"
          >
            <div
              className={`w-[30px] h-[1px] transition ease-in duration-150  bg-black ${
                showNav ? "rotate-45 mb-1  translate-y-[1px]" : "rotate-0 mb-1"
              } `}
            ></div>
            <div
              className={`w-[30px] h-[1px] transition ease-in duration-150 bg-black ${
                showNav ? "hidden mb-0" : "mb-1"
              } `}
            ></div>
            <div
              className={`w-[30px] h-[1px] transition ease-in duration-150 bg-black  ${
                showNav ? "-rotate-45 mb-0 -translate-y-[3px]" : "rotate-0"
              }`}
            ></div>
          </button>

          {toggleDropdownMenu && (
            <div className="dropdown_menu">
              <Link
                href="/"
                className="dropdown_link"
                onClick={handleDropdownMenu}
              >
                Home
              </Link>
              <Link
                href="/feed"
                className="dropdown_link"
                onClick={handleDropdownMenu}
              >
                Feed
              </Link>
              <Link
                href="/course"
                className="dropdown_link"
                onClick={handleDropdownMenu}
              >
                Course
              </Link>
              <Link
                href="/playground"
                className="dropdown_link"
                onClick={handleDropdownMenu}
              >
                Playground
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center">
        <Link href="/" className="flex gap-1 flex-center">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={45}
            height={45}
            className="object-contain"
          />
          <p className="logo_text">Promptify</p>
        </Link>

        <div className="md:ml-8 sm:flex sm:gap-4 hidden">
          <Link href="/feed" className="navbar_link">
            Feed
          </Link>
          <Link href="/course" className="navbar_link">
            Course
          </Link>
          <Link href="/playground" className="navbar_link">
            Playground
          </Link>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex items-center gap-3 md:gap-2">
            <Link href="/create-prompt" className="black_btn">
              Create
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Logout
            </button>

            <Link href="/profile">
              <Image
                src={session?.user?.image}
                width={45}
                height={45}
                className="rounded-full p-[2px] border border-gray-dark"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <button className="black_btn" onClick={onOpen}>
            Login
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user?.image}
              width={45}
              height={45}
              className="rounded-full p-[2px] border border-gray-dark"
              alt="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button className="black_btn" onClick={onOpen}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
