import React from 'react';

const SearchBar: React.FC<{
  display: string;
  _suggestions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  _search: (value: string) => Promise<void>;
}> = ({ display, _suggestions, handleKeyDown, _search }) => {
  return (
    <div className="flex gap-2 w-full my-5">
      <input
        type="text"
        className="text-black px-2 outline-none rounded-md h-9 w-full"
        value={display}
        onChange={_suggestions}
        onKeyDown={handleKeyDown}
      />
      <button
        className="bg-sky-400 text-black rounded-md font-semibold px-3"
        onClick={() => _search(display)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
