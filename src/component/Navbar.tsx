import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink, Outlet } from 'react-router-dom'



function Navbar() {
  const getItem = useSelector((state:any) => state.cart.item)
  // console.log(getItem)
  return (
   <>
  <div className='flex justify-between p-2 py-4 bg-slate-600 items-center text-white
   sticky top-0  z-10'>
    <h1 className=''>Navbar</h1>
   <ul className='flex justify-between gap-5'>
   <NavLink to="/" className={({isActive}) => isActive ? "text-[rgb(22,202,130)]" : ""}>
   <li>Home</li>
   </NavLink>
  
   <NavLink to="/help" 
   className={({isActive}) => isActive ? "text-[rgb(22,202,130)]" : ""}
   ><li>Help</li> </NavLink>
   <NavLink to="/login"
   className={({isActive}) => isActive ? "text-[rgb(22,202,130)]" : ""}
   ><li>LogIn</li> </NavLink>
   <NavLink to="/Cart"
   className={({isActive}) => isActive ? "text-[rgb(22,202,130)]" : ""}
   >
   <li>Cart
    ({getItem.length})
   </li>
   </NavLink>
   </ul>
  </div>
  <Outlet/>
   </>
    
  )
}

export default Navbar