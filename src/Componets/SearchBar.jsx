import React, { useState } from "react";

const key = "18d8dc115d954615a6fe8522598e8a97";

export const SearchBar = () => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://api.rawg.io/api/games?key=" + key)
      .then((response) => response.json())
      .then((json) => {
        const results = Array.from(json).filter((user) => {
          return (
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        console.log(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <input
      type="text"
      placeholder="Type to search...."
      className="bg-transparent w-full outline-none pl-2 items-center rounded-full"
      value={input}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};
