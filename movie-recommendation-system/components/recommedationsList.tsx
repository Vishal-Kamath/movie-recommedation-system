import React from 'react';

const RecommedationList: React.FC<{
  recommedations: string[];
  inputIndex: number;
  _search: (value: string) => Promise<void>;
}> = ({ recommedations, inputIndex, _search }) => {
  return (
    <>
      {recommedations.map((result, index) => {
        return index === inputIndex ? (
          <button
            className="flex h-9 cursor-pointer items-center gap-5 border-l-2 border-sky-300 bg-slate-100 px-5 leading-none dark:border-sky-700 dark:bg-slate-800"
            key={result}
            onClick={() => _search(result)}
          >
            <span>•</span>
            <span>{result}</span>
          </button>
        ) : (
          <button
            className="flex h-9 cursor-pointer items-center gap-5 border-l-2 px-5 leading-none hover:bg-slate-100 dark:hover:bg-slate-800"
            key={result}
            onClick={() => _search(result)}
          >
            <span>•</span>
            <span>{result}</span>
          </button>
        );
      })}
    </>
  );
};

export default RecommedationList;
