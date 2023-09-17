"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import Form from "@components/Form";

import UnderDev from "@components/UnderDev";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/feed");
        toast.success("Prompt Created!", {
          style: {
            borderRadius: "12px",
            background: "#FFF",
            color: "#495057",
          },
          iconTheme: {
            primary: "#495057",
            secondary: "#F5F7F8",
          },
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-[5rem] w-full">
      <UnderDev />
      {session?.user ? (
        <Form
          type="Create"
          post={post}
          setPost={setPost}
          submitting={submitting}
          handleSubmit={createPrompt}
        />
      ) : (
        <h1 className="mt-4 font-opensans text-center">Login to continue</h1>
      )}
    </div>
  );
};

export default CreatePrompt;
