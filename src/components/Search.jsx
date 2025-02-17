import "../App.css";
import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  return (
    <form action={`/search/${query}`} method="GET" className="searchBar">
      <input
        type="text"
        placeholder="Search Movies"
        className="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="searchBtn" type="submit">
        Search
      </button>
    </form>
  );
}
