"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import UnderDev from "@components/UnderDev";
import Loader from "@components/Loader";

const Playground = () => {
  const { data: session } = useSession();
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "You are a chatbot that is helpful and replies concisely",
    },
  ]); // An array of the messages that make up the chat
  const [newMessageText, setNewMessageText] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(false);

  // `onChange` event handler to update `newMessageText` as the user types
  const onChange = (event) => {
    setNewMessageText(event.target.value);
  };

  // `onClick` event handler to create a new chat
  const onClick = () => {
    setMessages([
      {
        role: "system",
        content: "You are a chatbot that is helpful and replies concisely",
      },
    ]);
    setNewMessageText("");
  };

  // `onSubmit` event handler fired when the user submits a new message
  const onSubmit = async (event) => {
    event.preventDefault();
    setMessages([...messages, { role: "user", content: newMessageText }]);
    setLoadingStatus(true);
    setNewMessageText("");
  };

  // `onKeyDown` event handler to send a message when the return key is hit
  // The user can start a new line by pressing shift-enter
  const onKeyDown = (event) => {
    if (event.keyCode == 13 && event.shiftKey == false) {
      onSubmit(event);
    }
  };

  // Effect hook triggered when `loadingStatus` changes
  // Triggered on form submission
  useEffect(() => {
    // Function that calls the `/api/chat` endpoint and updates `messages`
    const fetchReply = async () => {
      try {
        // Try to fetch a `reply` from the endpoint and update `messages`
        const response = await fetch("/api/openai", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages }),
        });

        const responseBody = await response.json();
        const reply =
          response.status === 200
            ? responseBody.reply
            : responseBody.error.reply;

        setMessages([...messages, reply]);
      } catch {
        // Catch and handle any unexpected errors
        const reply = {
          role: "assistant",
          content: "An error has occured.",
        };

        setMessages([...messages, reply]);
      }
      // Set `setLoadingStatus` to false
      setLoadingStatus(false);
    };

    // `fetchReply` executes only if a new message has been submitted
    // `setLoadingStatus(false)` triggers the hook again
    // No action occurs the second time because of the condition
    if (loadingStatus === true) {
      fetchReply();
    }
  }, [loadingStatus]);

  return (
    <div className="container">
      {/* <UnderDev /> */}
      {session?.user ? (
        <div className="w-full h-[84vh] flex flex-col items-center relative">
          <h1 className="head_text text-left">
            <span className="head_text_gradient">AI Playground</span>
          </h1>
          <p className="desc text-center max-w-md mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ex ipsum maxime totam perferendis quis.
          </p>

          <div className="w-full h-[60vh] lg:h-[58vh] overflow-y-scroll bg-white rounded-lg p-1 lg:p-4 shadow-md">
            {messages.slice(1).map((message, index) => (
              <div key={index.toString()}>
                <div className="flex p-3 lg:p-4 justify-start items-start">
                  <div className="w-[30px] lg:w-[5%] flex justify-center mr-2">
                    {message.role === "assistant" ? (
                      <Image
                        src="https://ik.imagekit.io/picg4q9lv/Promptify/promptify_logo.svg?updatedAt=1695900795786"
                        width={50}
                        height={50}
                        className="w-[40px] rounded-full"
                        alt="promptify-logo"
                      />
                    ) : (
                      <Image
                        src={session?.user?.image}
                        width={50}
                        height={50}
                        className="w-[40px] rounded-full"
                        alt="user-img"
                      />
                    )}
                  </div>
                  {/* {loadingStatus && (
                  <div className="mx-2 mt-4">
                    <Loader />
                  </div>
                )} */}
                  <p className="w-[calc(100%-30px)] lg:w-[95%] font-opensans text-sm lg:text-justify">
                    {message.content}
                  </p>
                </div>
                <hr />
              </div>
            ))}
          </div>

          <div className="z-20 absolute bottom-2 flex-between w-full bg-white shadow-md rounded-lg px-2 lg:px-4 py-2">
            <Image
              src="https://ik.imagekit.io/picg4q9lv/Promptify/promptify_logo.svg?updatedAt=1695900795786"
              className="w-[30px]"
              width={30}
              height={30}
              alt="promptify-logo"
            />
            <form
              className="w-[calc(100%-40px)] flex justify-between items-center"
              onSubmit={onSubmit}
            >
              <input
                className="border-none outline-none w-[90%] font-poppins text-sm text-primary-black"
                type="text"
                value={newMessageText}
                onChange={onChange}
                onKeyDown={onKeyDown}
                placeholder="Write your prompt here..."
              />

              {loadingStatus ? (
                <button
                  className="rounded-md w-[50px] lg:w-[75px] border flex justify-center lg:justify-evenly items-center bg-primary-black px-1 py-2 text-primary-white transition-all text-center text-[14px] font-opensans"
                  disabled
                >
                  <Image
                    src="https://ik.imagekit.io/picg4q9lv/Promptify/assistant_stars.svg?updatedAt=1695419005659"
                    width={25}
                    height={25}
                    className="w-[20px]"
                    alt="star_img"
                  />
                  <p className="hidden lg:block tracking-wide">Start</p>
                </button>
              ) : (
                <button
                  className="rounded-md w-[50px] lg:w-[75px] border flex justify-center lg:justify-evenly items-center bg-primary-black px-1 py-2 text-primary-white transition-all text-center text-[14px] font-opensans"
                  type="submit"
                >
                  <Image
                    src="https://ik.imagekit.io/picg4q9lv/Promptify/assistant_stars.svg?updatedAt=1695419005659"
                    width={25}
                    height={25}
                    className="w-[20px]"
                    alt="star_img"
                  />
                  <p className="hidden lg:block tracking-wide">Start</p>
                </button>
              )}
            </form>
          </div>
        </div>
      ) : (
        <h1 className="mt-4 font-opensans text-center">Login to continue</h1>
      )}
    </div>
  );
};

export default Playground;
