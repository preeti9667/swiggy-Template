import React from 'react'
import { IMAGE_ID } from '../utils/Api'
import { useDispatch } from 'react-redux'
import { addItem } from '../own store/cartSlice'
interface props{
    ItemCards: any
}

const ItemCards:React.FC<props> = ({ItemCards}) =>{
    const dispatch = useDispatch()
    const handleAddToCart = (ItemCards: any) => {
       dispatch(addItem(ItemCards))   
    }
    
    return(
        <>
        <div className='border-b-1 flex items-center mt-1 p-4 relative '>
        <div className='p-4 w-450'>
       <div>{ItemCards.card.info.name}</div>
       <div>₹{ItemCards.card.info.price/100}</div>
       <div>⭐️{ItemCards.card.info.ratings.aggregatedRating.rating}</div>
       <div className='text-stone-500 text-sm '>{ItemCards.card.info.description}</div>
        </div>
        {/* <div className=' border-1 text-end' > */}
    

            <img  alt='image' className='rounded-2xl h-50 w-50 block'
            src={IMAGE_ID + ItemCards.card.info.imageId}/>

        <button onClick={()=> handleAddToCart(ItemCards)}
        className='text-green-700 border-1 bg-white px-10 py-2 cursor-pointer absolute bottom-2 right-10  rounded-[10px]' >
            ADD</button>

        </div>
        
       
        </>
    )
}
export default ItemCards;