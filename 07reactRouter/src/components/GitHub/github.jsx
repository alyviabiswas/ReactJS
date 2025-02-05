import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub(){
    const data=useLoaderData()
    // const [data, setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/alyviabiswas')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    // })
    // },[])

    return (
        <div className="text-center m-4 p-4 text-white bg-gray-600 text-3xl">GitHub Followers: {data.followers} 
        <img src={data.avatar_url} alt="Git Picture" width={300}/>
        </div>
        
    )
}

export default GitHub

export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/alyviabiswas')
    return response.json()
}