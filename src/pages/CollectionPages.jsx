import React from 'react'
import { use } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Collectioncard from '../components/Collectioncard';
import Navbar from '../components/Navbar';
import { clearCollection, removeCollection } from '../redux/features/collectionSlice';

const CollectionPages = () => {
  
  const dispatch = useDispatch();
  const clearAllCollection = () => {

    dispatch(clearCollection())
  }


  const collection = useSelector((state) => state.collection.items);
  return (
   <div className=' overflow-auto py-6 px-10'>
    <div className='flex justify-between'>
      <h2 className='text-2xl font-medium'>Your collection</h2>
      <button
      onClick={()=>{clearAllCollection()

      }}
      className='bg-red-600 text-base py-2 px-5 font-medium rounded-lg'>Clear All</button>
    </div>
    <div className="flex flex-wrap justify-start w-full gap-2">
       {collection.map((item, idx)=>{
       return  <div key={idx}>
         <Collectioncard item = {item}/>
       </div>
      
       })}
    </div>
    </div>
  )
}

export default CollectionPages