"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Report from "@/components/component/Report";
import parse from 'html-react-parser';
import { CircleUserRound } from 'lucide-react';

function Page({ params }: { params: { slug: string } }) {
  const [data, setData] = useState<any>({});
  const [id, setId] = useState('');
  const [content, setContent] = useState<string>('');
  const [comment, setComment] = useState('');
  const [userComment, setUserComment] = useState([]);

  useEffect(() => {
    getData();
    getAllComments();
  }, []);

  async function getData() {
    try {
      const id: string = params.slug[0].toString();
      setId(id);
      const response = await axios.post('/api/user/getBlogs', { id });
      const body = response.data;
      setData(body.data);

      if (typeof body.data.content === 'object' && body.data.data !== null) {
        setContent(JSON.stringify(body.data.content)); 
      } else if (typeof body.data.content === 'string') {
        setContent(body.data.content);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  }

  async function postComment() {
    try {
      const response = await axios.post("/api/user/postComment", {
        blogId: id,
        comment
      });

      if (!response) {
        console.log("comment error");
      } else {
        setComment(''); // Clear the comment input after posting
        getAllComments(); // Refresh comments after posting
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllComments() {
    try {
      const id = params.slug[0];
      const res = await axios.post("/api/user/getComments", { id });
      const { data } = await res.data;
      setUserComment(data);
    } catch (error: any) {
      if (error.response && error.response.status) {
        setUserComment([]);
      } else {
        setUserComment([]);
      }
    }
  }

  return (
    <>
      <section className="flex flex-col items-center justify-center px-4 py-12">
        <div className="mx-auto max-w-7xl">
          {/* Blog Title */}
          <div className="flex flex-col space-y-4 pb-10">
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3"></div>
            <h1 className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
              {data?.title}
            </h1>
          </div>

          {/* Blog Image */}
          <div className="w-full space-y-4">
            <Image
              height={1000}
              width={1000}
              className="h-[200px] w-full rounded-xl object-cover md:h-full"
              src={data.imageUrl}
              alt="image"
            />
          </div>

          {/* Blog Content */}
          <div className="mt-4">
            {parse(content)}
          </div>

          {/* Comments Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800">Comments</h2>
            {userComment.map((el: { comment: string }, index) => (
              <div key={index} className="flex items-center justify-start gap-4 mt-2">
                <CircleUserRound />
                <div className="bg-gray-100 p-2 rounded-md">{el?.comment}</div>
              </div>
            ))}
          </div>

          {/* Add Comment */}
          <div className="mt-4 flex flex-col">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="border rounded-md p-2 mb-2"
              placeholder="Add a comment..."
            />
            <button
              onClick={postComment}
              className="inline-block rounded-md bg-black px-4 py-2 text-white transition duration-200 hover:bg-gray-800"
            >
              Comment
            </button>
          </div>

          {/* Report Section */}
          <div className="mt-4 flex flex-1 items-center justify-center">
            <Report blogId={id} />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Page;
