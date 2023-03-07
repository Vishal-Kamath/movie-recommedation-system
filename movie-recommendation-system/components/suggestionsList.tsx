import React from 'react';

const SuggestionsList: React.FC<{
  suggestions: string[];
  inputIndex: number;
  _search: (value: string) => Promise<void>;
}> = ({ suggestions, inputIndex, _search }) => {
  return (
    <>
      {suggestions.map((suggest, index) => {
        return index === inputIndex ? (
          <button
            className="flex h-9 cursor-pointer items-center gap-5 border-l-2 border-sky-300 bg-slate-100 px-5 leading-none dark:border-sky-700 dark:bg-slate-800"
            key={suggest}
            onClick={() => _search(suggest)}
          >
            <span>•</span>
            <span>{suggest}</span>
          </button>
        ) : (
          <button
            className="flex h-9 cursor-pointer items-center gap-5 border-l-2 px-5 leading-none hover:bg-slate-100 dark:hover:bg-slate-800"
            key={suggest}
            onClick={() => _search(suggest)}
          >
            <span>•</span>
            <span>{suggest}</span>
          </button>
        );
      })}
    </>
  );
};

export default SuggestionsList;
