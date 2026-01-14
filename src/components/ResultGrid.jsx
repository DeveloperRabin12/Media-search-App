//importing the required functions from MediaApi file
import { useEffect } from "react";
import { fetchPhotos, fetchPexelvideos } from "../apis/MediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/SearchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  // Extracting necessary state variables from the Redux store and destructuring them
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );

  // Using useEffect to fetch data whenever the query or activeTab changes
  useEffect(() => {
    if (!query) return ;
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        if (activeTab == "photos") {
          let response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        }
        if (activeTab == "videos") {
          let response = await fetchPexelvideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url:item.url,
          }));
        }
        dispatch(setResults(data));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };

    getData();
  }, [query, activeTab]);

  if (error) {
    return <h1>error</h1>;
  }
  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="flex flex-wrap justify-between w-full gap-2 overflow-auto px-10">
      {results.map((item,idx) => {
        return <div key={idx}>
          <ResultCard item={item} />
        </div>
      
      })}
    </div>
  );
};

export default ResultGrid;
