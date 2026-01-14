import { useDispatch } from "react-redux";
import { addCollection } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  
  const dispatch = useDispatch();

  const addToCollection = (item) => {
    dispatch(addCollection(item));
  }

  return (
    <div className="w-[18vw] h-80 relative bg-white rounded-xl overflow-hidden ">
     <a className="h-full" target="_blank" href={item.url}>
       {item.type==="photo"?<img src={item.src} className="h-full w-full object-cover object-center" alt=""/>:''}
      {item.type==="video"?<video autoPlay loop className="h-full w-full object-cover object-center"  muted src={item.src} alt=""></video>:''}
     </a>
      <div id="bottom" className="flex justify-between items-center gap-3 w-full px-4 py-6 text-white absolute bottom-0  ">
        <h2 className="capitalize font-semibold text-normal h-12 overflow-hidden">{item.title}</h2>
        <button
        onClick={() => addToCollection(item)}
        className="bg-indigo-600 text-white px-3 py-1 rounded font-medium cursor-pointer active:scale-95">Save</button>
      </div>
    </div>
  )
}

export default ResultCard