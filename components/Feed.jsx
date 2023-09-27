import { useState, useEffect } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import PromptCard from "@components/PromptCard";
import Loader from "@components/Loader";

const PromptCardList = ({ data, handleTagClick }) => (
  <div className="prompt_layout">
    {data.map((post) => (
      <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
    ))}
  </div>
);

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [uniqueTagData, setUniqueTagData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      const uniqueData = filterDuplicates(data);
      setUniqueTagData(uniqueData);
      setAllPosts(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i");
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

  const filterDuplicates = (data) => {
    const uniqueData = [];
    const seen = new Set();

    data.forEach((item) => {
      if (!seen.has(item.tag)) {
        seen.add(item.tag);
        uniqueData.push(item);
      }
    });

    return uniqueData;
  };

  return (
    <section className="feed">
      <form className="mt-4 w-full flex flex-col items-center lg:items-stretch lg:flex-row gap-3 lg:gap-0 search_input">
        <input
          type="text"
          placeholder="Search by tag, username or prompt"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="w-full p-3 px-4 shadow-md bg-white lg:shadow-none rounded-lg lg:rounded-e-none  outline-none border-none lg:w-[75%] font-opensans text-sm font-medium"
        />
        <Select
          label="Tags"
          placeholder="Select Tag"
          radius="sm"
          className="w-full outline-none border-none rounded-lg lg:w-[25%]"
          classNames={{
            base: "bg-white",
            label: "text-[0.65rem]",
            trigger:
              "bg-primary-black shadow-none text-primary-white data-[hover=true]:bg-primary-black lg:rounded-s-none lg:rounded-e-lg",
            value: "capitalize text-[0.80rem]",
          }}
          size="sm"
        >
          {uniqueTagData.map((post) => (
            <SelectItem
              className="capitalize"
              key={post._id}
              onClick={() => handleTagClick(post.tag)}
            >
              {post?.tag}
            </SelectItem>
          ))}
        </Select>
      </form>

      <div>
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
      </div>
    </section>
  );
};

export default Feed;
