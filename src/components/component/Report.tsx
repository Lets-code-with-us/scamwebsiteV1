"use client"
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import { Toaster,toast } from 'react-hot-toast';

function Report({blogId}:{blogId:any}) {
  const [data,setData] = useState('')
  const [disabled,setDisabled] = useState(false)

  async function postReport() {
    const response =  await axios.post("/api/user/report",{blogId,data})
    if(!response){
      toast.error("Something went wrong")

    }
    else{
      toast.success("Thanks for Posting")
    }
    
  }
  useEffect(()=>{
    if(data.length>0){
      setDisabled(false)
    }
    else{
      setDisabled(true)
    }
    
  },[])
 

  return (
    <>
    <Toaster/>
    <div>
        <div className="w-full flex flex-col justify-center mt-4 mb-10 gap-4 ">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="name"
      >
        Enter your report 
      </label>
      <input
        className="flex h-10 w-[30rem] rounded-md border border-black/30 bg-transparent px-4 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Enter your report details"
        id="name"
        onChange={(e)=>setData(e.target.value)}
      ></input>
       <button
       disabled={disabled}
       onClick={postReport}
       type="button"
        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
        Report 
      </button>

    </div>
    </div>
        </>
  )
}

export default Report