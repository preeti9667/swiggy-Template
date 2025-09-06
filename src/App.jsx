import { useEffect, useState} from 'react'
import './App.css'
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import Home from './component/Homes'
import Navbar from './component/Navbar'
import RestaurantAbout from './component/RestaurantAbout'
import UseContext from './utils/UseContext'
import { Provider } from 'react-redux'
import AppStore from './own store/appStore'
import Cart from './component/Cart'
import Help from './component/Help'
import LogIn from './component/LogIn'
function App() {
  const [userName, setUserName] = useState('')
  useEffect(() => {
    const data = {
      name: 'Ram'
    }
    setUserName(data.name)
  }, [userName])

  return (
    <>
  <Provider store={AppStore}>
  <UseContext.Provider value={{name:userName}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/RestaurantAbout/:id' element={<RestaurantAbout/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/help' element={<Help/>}/>
      <Route path='/login' element={<LogIn/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    </UseContext.Provider>
    </Provider>
    </>
    
  )
}

export default App
