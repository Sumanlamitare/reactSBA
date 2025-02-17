import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Search from "./components/Search";
import SearchResults from "./pages/SearchResult";

function App() {
  return (
    <>
      <Nav></Nav>
      {/* <Search></Search> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {<Route path="/movie/:id" element={<MovieDetails />} />}
        <Route path="/search/:query" element={<SearchResults />} />
      </Routes>
    </>
  );
}

export default App;
