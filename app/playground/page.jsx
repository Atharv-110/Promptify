"use client";
import { useState, useEffect } from "react";
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
      <UnderDev />
      {session?.user ? (
        <div className="w-full">
          <h1 className="text-center font-opensans mt-4">
            AI Playground Coming Soon...
          </h1>

          <div className="bg-slate-400">
            {messages.slice(1).map((message, index) => (
              <div className="mx-2 my-4" key={index.toString()}>
                {message.content}
              </div>
            ))}
          </div>

          {loadingStatus && (
            <div className="mx-2 mt-4">
              <Loader />
            </div>
          )}

          {!loadingStatus && messages.length > 1 && (
            <div className="mt-4 flex justify-center">
              <button
                className="h-11 rounded-md border-2 border-gray-500
                         bg-gray-500 px-1 py-1 hover:border-gray-600 
                         hover:bg-gray-600"
                onClick={onClick}
              >
                <p className="font-bold text-white">New chat</p>
              </button>
            </div>
          )}
          <div
            className="fixed bottom-0 z-10 w-full max-w-full bg-white/75
                     sm:max-w-3xl"
          ></div>

          <div
            className="z-20 w-full max-w-full 
                     sm:max-w-3xl"
          >
            <form className="mx-2 flex items-end" onSubmit={onSubmit}>
              <textarea
                className="mr-2 grow resize-none rounded-md border-2 
                       border-gray-400 p-2 focus:border-blue-600 
                         focus:outline-none"
                value={newMessageText}
                onChange={onChange}
                onKeyDown={onKeyDown}
                placeholder="Why is the sky blue?"
              />

              {loadingStatus ? (
                <button
                  className="h-11 rounded-md border-2 border-blue-400
                         bg-blue-400 px-1 py-1"
                  disabled
                >
                  <p className="font-bold text-white">Send</p>
                </button>
              ) : (
                <button
                  className="h-11 rounded-md border-2 border-blue-600
                         bg-blue-600 px-1 py-1 hover:border-blue-700 
                         hover:bg-blue-700"
                  type="submit"
                >
                  <p className="font-bold text-white">Send</p>
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
