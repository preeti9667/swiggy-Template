import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Menu from './Menu'
import { RESTAURANT_API} from '../utils/Api'
import RestaurantsCard from './restaurantsCard'

interface items{
  cat: string
  info:{
id:string
name:string
areaName: string
avgRating: number
costForTwo: string
cloudinaryImageId: string

  }
}
export default function Home() {
const  Router = useNavigate()
const [search, setSearch] = useState('')
const [restaurant, setRestaurant] = useState<items[]>([])
const [data, setData] = useState<items[]>([])
const [loading, setLoading] = useState<boolean>(true)


  const getData = async() => {
    try { 
    const res = await fetch(RESTAURANT_API)
    const json = await res.json()
    setData(json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    const dataList1 = json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants
    setRestaurant(dataList1)
    setLoading(false)
  }
  catch (error) {
    console.log(error)
  }
  }
  useEffect(() => {
    getData()
  }, [])

const handleClick = (id:string)=>{
  Router(`/Menu/${id}`)
}

const handleSearch = () =>{
  // console.log('hello')
    const findData = data.filter((restaurant)=>(restaurant.info.name.toLowerCase().includes(search.toLowerCase())))
   setRestaurant(findData)
  
}
const handleFilterData = () => {
  const filterData = data.filter((item) => item.info.avgRating > 4.5)
  setRestaurant(filterData)
}
  return (
    <div className='text-red w-11/12 m-auto sm:w-10/12'>
      <div 
      className='md:flex lg:flex xl:flex sm:flex items-center
       sm:p-1 md:p-1 lg:p-1 xl:p-1 gap-3'
>
        <div className='flex gap-2 pt-5 pb-5'>
          <input value={search} className='border-1 rounded-2xl p-2 lg:w-[300px] md:w-[300px] xl:w-[300px]  sm:w-[200px] ' placeholder='search'
           onChange={(e)=> setSearch(e.target.value)} />
          <button onClick={handleSearch}
           className='cursor-pointer text-white px-5 py-1 rounded-2xl bg-[#1a1617a1]'>search</button>
        </div>
        {/* <div> */}<div>
      <button className=' cursor-pointer rounded-2xl px-4 py-2 bg-[#1a1617a1] text-white'
      onClick={handleFilterData}
      >Top Rated Restaurants</button>
      </div>
      </div>
        {/* </div> */}
      {/* <div>{name}</div> */}
        <div className='grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-7 p-5 ' >
        {loading? <h1>Loading...</h1>:   
            restaurant.map((item,)=>(
              <div onClick={()=> handleClick(item.info.id)} key={item.info.id}> 
               <RestaurantsCard restaurant={item} />
              </div>
            ))
          }
        </div>

    </div>
  )
}

