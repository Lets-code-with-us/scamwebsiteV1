"use client";
import React from "react";
import { WarningBanner } from "@/components/component/warningBanner";
import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import Image from "next/image";
function page() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImage] = useState("");
  const [content, setContent] = useState("");
  const [category, setcatgory] = useState("");
  const [imagelink,setImageLink] = useState('')
  const [disabled, setDisabled] = useState(false);
  const Router = useRouter();

  useEffect(() => {
    if (
      title.length > 0 &&
      imageUrl.length > 0 &&
      content.length > 0 &&
      category.length > 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [title, imageUrl, content, category]);

  async function postblog() {
    try {
      
      const data = await axios.post("/api/user/blog", {
        title,
        imageUrl,
        category,
        content,
      });
      const response = await data;
      if (!response) {
        toast.error("Server Error");
      } else {
        toast.success("Blog SuccessFully added");
        setTimeout(() => {
          Router.push("/trend");
        }, 500);
      }
    }
     catch (error:any) {
NextResponse.json({"message":error},{status:400})
    }
  }
  return (
    <>
      <div>
        <Toaster />
      </div>
      <WarningBanner />
      <div className="px-40 pt-20 pb-40">
        <div className="space-y-5">
          <div>
            <label htmlFor="" className="text-base font-medium text-gray-900">
              {" "}
              Title{" "}
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setTitle(e.target.value)}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your Title"
              ></input>
            </div>
          </div>
          <div></div>
        </div>
        <div className="space-y-5">
          <div>
            <label htmlFor="" className="text-base font-medium text-gray-900">
              {" "}
              Image {" "}
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setImage(e.target.value)}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="file"
                placeholder="Upload your image"
              ></input>
              <div className="flex flex-1 items-center justify-center pt-5">

              <Image width={600} height={600} src={imagelink ? imagelink : 'https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' } alt={"image preview"}/>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="space-y-5">
          <div>
            <label htmlFor="" className="text-base font-medium text-gray-900">
              {" "}
              Content{" "}
            </label>
            <div className="mt-2">
              <textarea
                onChange={(e) => setContent(e.target.value)}
                name="content"
                id="content"
                cols={30}
                rows={10}
                className="flex h-40 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 overflow-y-hidden focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <label htmlFor="" className="text-base font-medium text-gray-900">
              {" "}
              Category{" "}
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setcatgory(e.target.value)}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your Category"
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center mb-20">
        <button
          onClick={postblog}
          disabled={disabled}
          type="button"
          className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Publish
        </button>
      </div>
    </>
  );
}

export default page;
