'use client';

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchTerm) return;
    router.push(`/search?term=${searchTerm}`);
  };

  return (
    <form
      className='max-w-6xl mx-auto flex items-center justify-between px-5'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        value={searchTerm}
        placeholder='Serach'
        onChange={(e) => setSearchTerm(e.target.value)}
        className='flex-1 w-full h-14 rounded-sm placeholder-gray-500
        text-gray-500 outline-none bg-transparent dark:text-orange-400'
      />
      <button
        type="submit"
        disabled={!searchTerm}
        className='text-orange-400 disabled:text-gray-400'
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
