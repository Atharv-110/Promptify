"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";
import UnderDev from "@components/UnderDev";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  return (
    <div className=" w-full mt-[5.5rem]">
      <UnderDev />
      <Profile
        name={`${userName}'s`}
        desc={`Step into ${userName}'s unique profile world. Discover extraordinary prompts and let the magic of their imagination inspire you.`}
        data={userPosts}
      />
    </div>
  );
};

export default UserProfile;
