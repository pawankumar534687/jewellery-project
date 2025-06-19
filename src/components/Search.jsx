import React, { useState } from "react";

const Search = () => {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="relative">
      {/* Search Icon */}
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
              placeholder="Search here..."
              className="flex-1 p-2 border border-gray-300 rounded"
            />
            <button
              onClick={() => setShowInput(false)}
              className="text-gray-500 hover:text-black"
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
