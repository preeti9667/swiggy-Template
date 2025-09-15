import React, { useEffect, useState } from 'react'
import { HELP_TITLE_API } from '../utils/Api'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useGetData } from '../utils/useGetData'
import HelpIssues from './HelpIssues'

interface Title {
  title:string
  type:string
}

const Help = () => {

  const [title, setTitle] = useState<Title[]>([])
  const  Router = useNavigate()


  const [loading, setLoading] = useState<boolean>(true)

  const [issueType, setIssueType] = useState('')
 

  const getTitle = async() => {
    try {
      let res = await fetch(HELP_TITLE_API)
      let json = await res.json()
      setTitle(json?.data?.issueTypes.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  
  
  useEffect(() => {
    getTitle()
  },[])
  

  const HandleClick = (type : string) => {
    // Router(`/help/${type}`)
    setIssueType(type)
    // console.log(issueType)
  }

  

  return (
    <div>
      <div 
      className='  h-[150px] bg-[#1a1617a1] pt-10 sticky top-0 z-10'>
        <h1 className='text-3xl text-center text-white'>Help & Support</h1>
        <h5 className='text-center text-white'>Let's take a step ahead and help you better.</h5>
      </div>
      <div className='sm:w-12/12 md:w-11/12 lg:w-8/12 xl:w-8/12 m-auto  
      grid grid-cols-[1fr_2fr] p-[20px]
       mt-10 gap-[20px]'>
        <div className='flex flex-col gap-[20px] '>
          {
            // loading ? <h1>Loading...</h1> : 
            title.map((item: Title, index : number) => (
              <div key={index}
              className='shadow-2xl p-[10px]' >
                <button onClick={()=> HandleClick(item.type)} >
                <NavLink to={"/help"}
                 className={() => issueType === item.type ?
                   " sm:text-[20px] md:text-[20px] lg:text-2xl xl:text-2xl font-bold text-amber-600" :
                   " sm:text-[20px] md:text-[20px] lg:text-2xl xl:text-2xl font-bold list-none"
                  
                }>
                <li>{item.title }</li></NavLink>
                </button>
              </div>
              
            ))
          }
        </div>
          <HelpIssues issueType={issueType}/>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Help