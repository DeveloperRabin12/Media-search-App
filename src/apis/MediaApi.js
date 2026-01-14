import axios from "axios";

const apiUnsplash = import.meta.env.VITE_API_URL;
const apiPexels = import.meta.env.VITE_API_PEXELS;

//function to fetch photos from unsplash api
//showa data 1 page with 20 photos per page according to query
export async function fetchPhotos(query,page=1, per_page=20) {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
   //params is the query parameters sent with the request from search box
    params: { query, page, per_page },
    headers: {
      Authorization: `Client-ID ${apiUnsplash}`,
    },
  });
  return res.data;
  
}


export async function fetchPexelvideos(query,per_page=15) {

    const videos = await axios.get("https://api.pexels.com/videos/search",{
        params: { query, per_page },
        headers: {
            Authorization: ` ${apiPexels}`,
    }})
    return videos.data;
}