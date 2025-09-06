import React, { useEffect, useState } from 'react'

interface Issues {
    title : string
    description : string
    hyperLinkText : string
}
interface props{
    issueType: string
}
const HelpIssues:React.FC<props> =  ({issueType}) => {
   const [issue, setIssue] = useState<Issues[]>([])
    const [openList, setOpenList] = useState<{ [key: string]: boolean }>({});

    const mydata = async() => {
        try {
            const res = await fetch(`https://www.swiggy.com/dapi/support/v3/issues/${issueType === ''? "partner-onboarding" : issueType}?`)
            const json = await res.json()
            // console.log(json.data?.issues?.data)
            setIssue(json.data?.issues?.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        mydata()
    },[issueType])

    const openDropdown = (categoryId: string) => {
  setOpenList((prev) => ({
    // ...prev,
    [categoryId]: !prev[categoryId], // Toggle only the clicked category
  }));
};
  return (
    <div
    >
       {issue.map((item, index) => {
           return(
               <div key={index} 
            //    className='bg-gray-200 p-5 rounded-3xl'
            >
                <div className='flex items-center justify-between cursor-pointer p-[15px]'>
               <span> {item.title}</span>
                <button onClick={()=>openDropdown(item.title)} className='text-2xl cursor-pointer'>⌄</button>
             </div> 
                <hr/>
                <hr/>
             {openList[item.title] && <p 
             className='bg-[rgba(26,22,23,0.24)] p-5 text-white'
             >{item.description ? item.description : item.hyperLinkText }</p>}
            </div>
        )
       })}

    </div>
  )
}

export default HelpIssues