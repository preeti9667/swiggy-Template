import React, { use } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IMAGE_ID } from '../utils/Api'
import ItemCards from './ItemCards'
import { clearCart } from '../own store/cartSlice'
export default function Cart() {
    const getItems = useSelector((state:any)=> state.cart.item)
        // console.log(getItems)

const dispatch = useDispatch()
const handleClearCart = () => {
    dispatch(clearCart())
}
  return (
    <div className='flex flex-col w-1/2 m-auto mt-4 '>
      <div className='flex justify-between'>
        <button className='  px-5 py-3  rounded-md w-40 bg-slate-400 text-white cursor-pointer'
         onClick={handleClearCart}>Clear Cart</button>
         <span className='border-1 rounded-2xl px-5 py-3'>Total {getItems.length}</span>
         </div>
        {getItems.map((ItemCards: any) => (
          <div className='border-b-1 flex items-center mt-1 p-4 relative '>
                 <div className='p-4 w-450'>
                <div>{ItemCards.card.info.name}</div>
                <div>₹{ItemCards.card.info.price/100}</div>
                <div>⭐️{ItemCards.card.info.ratings.aggregatedRating.rating}</div>
                <div className='text-stone-500 text-sm'>{ItemCards.card.info.description}</div>
                 </div>
                 {/* <div className=' border-1 text-end' > */}
                     <img  alt='image' className='rounded-2xl h-50 w-50 block'
                     src={IMAGE_ID + ItemCards.card.info.imageId}/>
         
                 </div>
                
        ))}

      
        
        {getItems.length === 0 && 
        <div className=' w-12/12 m-auto mt-9 bg-slate-50 h-[200px]
        flex items-center justify-center'>
          <h1>CART IS EMPTY </h1>
          </div>}
    </div>
  )
}
