"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import toast,{ Toaster } from "react-hot-toast";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { TwitterIcon } from "react-share";
import { Drawer } from "vaul";
export function BlogPage() {
  // Define state for posts
  const [posts, setPosts] = useState([]);
  const [like,setLike] = useState([])

  async function getBlogs() {
    try {
      const response = await axios.get("/api/user/giveBlogs");
      const { data } = await response.data;
      const postData = data;
      console.log(postData);
      setPosts(postData);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  }
  
async function handleLikes(id:any) {
 try {
   const res = await axios.post("/api/user/postlike",{id});
   if(res){

     toast.success("thanks for like")
   }
 } catch (error:any) {
  if(error.response && error.response.status ===404 || error.response && error.response.status ===400){
    toast.error("You already Like this post")
  }
  else{
    toast.error("something went wrong")
  }
 }
  
  
}


async function getLikes(id:any){
  try {
    const res = await axios.post("api/user/getlikes",{id})
    const datas = await res.data;
    console.log(datas.data)

    if(datas){
      setLike(datas.data)

    }
  } catch (error:any) {
    console.log(error)
    
  }


}
  // Use useEffect to run getBlogs only once when the component mounts
  useEffect(() => {
    getBlogs();
    
  }, []);

  return (
    <>
    <Toaster/>
      <div className="mx-auto max-w-7xl px-2">
        <div className="relative grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(
            (
              post: {
                _id: string;
                category: string;
                title: string;
                user: string;
                imageUrl: string;
              },
              index
            ) => (
              <div key={index}>
                <Link key={post._id} href={`/Blogs/${post._id}`}>
                  <div key={post.title} className="border">
                    <Image 
                    height={1200}
                    width={1200}
                      src={post.imageUrl}
                      className="aspect-video w-full rounded-md"
                      alt="blog image"
                      onLoad={()=>getLikes(post._id)}
                    />
                  </div>
                </Link>
                <div className="min-h-min p-3">
                  <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                    #{post.category}
                  </p>
                  <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                    {post.title}
                  </p>
                </div>

                <div className="flex flex-1 gap-3 items-center">
                  <button onClick={()=>handleLikes(post._id)} className="hover:pointer">&#x1F44D;</button>
                  {/* <div>{like.map((el,index)=>{
                    return(
                      <>
                      <div key={el}>
                      <h2>{index}</h2>

                      </div>
                      </>
                    )
                  })}</div> */}
                  <div>{like.length}</div>
                  <Drawer.Root>
                    <Drawer.Trigger asChild>
                      <button>&#x1F4E9;</button>
                    </Drawer.Trigger>
                    <Drawer.Portal>
                      <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                      <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0">
                        <div className="p-4 bg-white rounded-t-[10px] flex-1">
                          <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                          <div className="max-w-md mx-auto">
                            <Drawer.Title className="font-medium mb-4">
                              Share In media
                            </Drawer.Title>
                            <div className="flex flex-row items-center gap-3 justify-center">
                              <TwitterShareButton url={`/Blogs/${post._id}`}>
                                <TwitterIcon round />
                              </TwitterShareButton>
                              <WhatsappShareButton url={`/Blogs/${post._id}`}>
                                <WhatsappIcon round />
                              </WhatsappShareButton>
                              <FacebookShareButton url={`/Blogs/${post._id}`}>
                                <FacebookIcon round />
                              </FacebookShareButton>
                              <LinkedinShareButton url={`/Blogs/${post._id}`}>
                                <LinkedinIcon />
                              </LinkedinShareButton>
                            </div>
                          </div>
                        </div>
                      </Drawer.Content>
                    </Drawer.Portal>
                  </Drawer.Root>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
