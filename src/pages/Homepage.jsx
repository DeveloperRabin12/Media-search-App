import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Homepage = () => {

  const {query} = useSelector((store) => store.search); 
  return (
    <div>
        
      <SearchBar />

       {/* Conditional rendering of Tabs and ResultGrid based on whether the query is not an empty string */}
      {query !=''?<div><Tabs />
      <ResultGrid />
      </div>:''}
    </div>
  );
};

export default Homepage;
