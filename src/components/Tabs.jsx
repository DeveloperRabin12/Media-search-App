// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/SearchSlice";

const Tabs = () => {
  // Array of tabs to be displayed from local storage
  const tabs = ["photos", "videos"];

  // Initialize dispatch function from Redux to send actions
  const dispatch = useDispatch();
// Get the currently active tab from Redux store
  const activeTab =useSelector((state) => state.search.activeTab);
  
  return (
    <div className="flex gap-10 p-10">

      {/* displaying tabs which are in array using map function */}
      {/* idx helps to identify each tab uniquely */}
      {tabs.map((tab, idx) => (
        <button
          onClick={() => {
            // Dispatch the selected tab to the Redux store
            dispatch(setActiveTab(tab));
          }}
          className={`${(activeTab == tab ?'bg-blue-700':'bg-gray-600' )} px-5 py-2 rounded cursor-pointer active:scale-95`}
          key={idx}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
