import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [showInput, setShowInput] = useState(false);
  const [query, setquery] = useState("");
  const Navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://jewellery-backend-km3b.onrender.com/api/search?q=${query}`
      );

      
      Navigate("/searchs", {
        state: { results: response.data, query: query },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative">
      <img
        className="w-auto h-6 cursor-pointer"
        src="/search.png"
        alt="search"
        onClick={() => setShowInput(!showInput)}
      />

      {showInput && (
        <div className="fixed top-0 left-0 w-full bg-white p-4 z-[9999] shadow-md flex justify-center">
          <div className="w-full max-w-md flex items-center gap-2">
            <input
              type="text"
              value={query}
              placeholder="Search here..."
              className="flex-1 p-2 border border-gray-300 rounded"
              onChange={(e) => setquery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />

            <button onClick={handleSearch}>
              <img
                className="w-5 h-5 cursor-pointer"
                src="/search.png"
                alt=""
              />
            </button>
            <button
              onClick={() => setShowInput(false)}
              className="text-gray-500 hover:text-black "
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
