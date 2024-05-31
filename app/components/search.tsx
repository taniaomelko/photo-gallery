'use client';

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/results/${search}`);
    setSearch('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="py-4 px-8 w-full border border-grey rounded-small text-16"
      />
      <button type="submit" className="p-4 transition duration-300 hover:text-cyan">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.39961 1.19995C4.64023 1.19995 1.59961 4.24058 1.59961 7.99995C1.59961 11.7593 4.64023 14.8 8.39961 14.8C9.7418 14.8 10.984 14.4062 12.0371 13.7375L16.9496 18.65L18.6496 16.95L13.7996 12.1125C14.6715 10.9687 15.1996 9.55151 15.1996 7.99995C15.1996 4.24058 12.159 1.19995 8.39961 1.19995ZM8.39961 2.79995C11.2793 2.79995 13.5996 5.12026 13.5996 7.99995C13.5996 10.8796 11.2793 13.2 8.39961 13.2C5.51992 13.2 3.19961 10.8796 3.19961 7.99995C3.19961 5.12026 5.51992 2.79995 8.39961 2.79995Z" fill="currentColor"/>
        </svg>       
      </button>
    </form>
  );
}
