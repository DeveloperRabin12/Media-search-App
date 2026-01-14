import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/SearchSlice";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  // Initialize dispatch function from Redux to send actions to the storero
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the input by user search query to the Redux store
    dispatch(setQuery(search));

    setSearch("");
  };

  // Handle input change function

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex p-10 gap-5 bg-gray-800">
        <input
          onChange={handleChange}
          value={search}
          required
          className="w-full border-2 rounded px-4 py-2 outline-none"
          type="text"
          placeholder="search here.."
        />
        <button className="active:scale-95 border-2 rounded px-4 py-2 outline-none ml-2">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
