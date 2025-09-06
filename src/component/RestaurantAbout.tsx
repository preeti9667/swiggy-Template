import React, { ReactNode, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemCards from './ItemCards';
import { useGetData } from '../utils/useGetData';
interface Items{
  // card: any;
  name:string;
  avgRating:string;
  costForTwoMessage:string;
  city:string;
}

interface title {
  card:{
    card:{
      title:string
      categoryId:string

      itemCards: [
        {
          card: {
            info: {
              id: string,
              name: string,
              category: string,
              description: string,
              imageId: string,
              price : number,
              ratings:{
                aggregatedRating:{
                  rating:string

                }
              }

            },
          },
        },
      ]
    }
  }
}


export default function RestaurantAbout() {
const params = useParams();
const id = params.id
const [openList, setOpenList] = useState<{ [key: string]: boolean }>({});

const {data, loading} = useGetData({url:`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`})

const name = data.data?.cards[2]?.card?.card?.info as Items || []
const Cards = data.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards.filter(c => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")  as title[] || [] 
    

const openDropdown = (categoryId: string) => {
  setOpenList((prev) => ({
    // ...prev,
    [categoryId]: !prev[categoryId], // Toggle only the clicked category
  }));
};

  return (
    <div>
      {loading && 
      <div className=' w-6/12 m-auto mt-9'> 

        <h1>Loading...</h1>
      </div>

      }
      <div className=' w-6/12 m-auto mt-9'>
      <h1 className=' font-bold text-3xl'>{name?.name}</h1>
      <div className=' border-1 flex flex-col shadow-2xl p-1 m-5 rounded-2xl'>
        <span>{name?.avgRating}</span>
        <span>{name?.costForTwoMessage}</span>
        <span>{name?.name}</span>
        <span>{name?.city}</span>
      </div>
      <hr/>
      <div>
        {
          Cards.map((category)=>(
            <div className='border-b-1 p-3 font-bold relative' key={category.card.card.title}>
             <div className='flex items-center justify-between cursor-pointer'>
               <span> {category.card.card.title}({category.card.card.itemCards.length})</span>
                <button onClick={()=>openDropdown(category.card.card.categoryId)} className='text-2xl cursor-pointer'>⌄</button>
             </div>  
                 {openList[category.card.card.categoryId] &&
                category.card.card.itemCards.map((text) => (
                  <div key={text.card.info.id}>
                    <ItemCards ItemCards={text} />
                  </div>
                ))}

                </div> 
          ))
        }
      </div>
     
    
      </div>

    </div>
  )
}
