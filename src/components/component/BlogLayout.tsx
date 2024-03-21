"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export function BlogPage() {
  // Define state for posts
  const [posts, setPosts] = useState([]);

  async function getBlogs() {
    try {
      const response = await axios.get("/api/user/giveBlogs");
      const { data } = await response.data;
      const postData = data;
      console.log(postData);
      setPosts(postData);
      // console.log(posts);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  }

  // Use useEffect to run getBlogs only once when the component mounts
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Resources and insights
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            veritatis voluptates neque itaque repudiandae sint, explicabo
            assumenda quam ratione placeat?
          </p>
          <div className="mt-6 flex w-full items-center space-x-2 md:w-1/3">
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Search Topics"
            ></input>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Search
            </button>
          </div>
        </div>
        <div className="mt-10 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row">
          <div className="flex w-full items-end border-b border-gray-300">
            {[
              "Design",
              "Product",
              "Software Engineering",
              "Customer Success",
            ].map((filter, index) => (
              <div
                className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black"
                key={filter}
              >
                {filter}
              </div>
            ))}
          </div>
        </div>
        {/* posts */}
        <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
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
              <Link key={post._id} href={`/api/user/getBlogs?id=${post._id}`}>
                <div key={index} className="border">
                  <div className="min-h-min p-3">
                    <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                      #{post.category}
                    </p>
                    <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-4 w-full text-sm leading-normal text-gray-600">
                      {post.title}
                    </p>
                    <div className="mt-4 flex space-x-3 ">
                      <img
                        className="h-full w-10 rounded-lg"
                        src={post.imageUrl}
                        alt="img"
                      />
                      <div>
                        <p className="text-sm font-semibold leading-tight text-gray-900">
                          {post.user}
                        </p>
                        {/* <p className="text-sm leading-tight text-gray-600">{post.date}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
}
