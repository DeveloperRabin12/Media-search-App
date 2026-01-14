// import { fetchPhotos } from "./apis/MediaApi";
// import { fetchPexelvideos} from "./apis/MediaApi";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import CollectionPages from "./pages/CollectionPages"; 
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-950 text-white">
       <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPages/>} />
      </Routes>
      
     
    </div>
  );
};

export default App;
