import React, {useEffect, useState } from 'react'

interface props {
    url: string
}
export const useGetData = ({url}:props ) => {
const [loading, setLoading] = useState<boolean>(true)
const [data, setData] = useState<any | null>([])


const fetchData = async() =>{
    try {
        const res = await fetch(url)
        const json = await res.json()
        setData(json)
        setLoading(false)
        // console.log(data)
    } catch (error) {
        console.log(error)
    }
}
useEffect(() => {
fetchData()
},[url])
    return {loading,data}
}

