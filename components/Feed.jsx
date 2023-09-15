"use client";

import { useState, useEffect } from "react";

// Loader
import Loader from "@components/Loader";

// Next UI components
// import { Skeleton } from "@nextui-org/react";

import PromptCard from "@components/PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-4 prompt_layout">
      {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);

  // loader states
  const [isLoading, setIsLoading] = useState(true);

  // Searching states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setAllPosts(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed">
      <form className="relative mt-4 w-full flex-center">
        <input
          type="text"
          placeholder="Search by tag, username or prompt"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {/* All Prompts */}
      <div>
        {/* <Loader /> */}
        {isLoading ? (
          <Loader />
        ) : searchText ? (
          <PromptCardList
            data={searchedResults}
            handleTagClick={handleTagClick}
          />
        ) : (
          <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
        )}

        {/* Previous version Code without loader */}
        {/* {searchText ? (
          <PromptCardList
            data={searchedResults}
            handleTagClick={handleTagClick}
          />
        ) : (
          <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
        )} */}
      </div>
    </section>
  );
};

export default Feed;
