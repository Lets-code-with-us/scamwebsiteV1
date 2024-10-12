'use client';

import React, { useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  TwitterIcon,
} from 'react-share';
import { Drawer } from 'vaul';

// This component will be responsible for fetching and displaying the like count
async function LikeCount({ postId }: { postId: string }) {
  const res = await axios.post('/api/user/getlikes', { id: postId });
  const likes = res.data.data;
  return <div>{likes.length}</div>;
}

export function BlogPage() {
  const [posts, setPosts] = React.useState([]);

  async function getBlogs() {
    try {
      const response = await axios.get('/api/user/giveBlogs');
      const { data } = await response.data;
      setPosts(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  }

  async function handleLikes(id: string) {
    try {
      const res = await axios.post('/api/user/postlike', { id });
      if (res) {
        toast.success('Thanks for liking');
        // Refresh the like count for this post
        getBlogs();
      }
    } catch (error: any) {
      if (
        error.response &&
        (error.response.status === 404 || error.response.status === 400)
      ) {
        toast.error('You already liked this post');
      } else {
        toast.error('Something went wrong');
      }
    }
  }

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <Toaster />
      <div className="mx-auto max-w-7xl px-2">
        <div className="relative grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(
            (post: {
              _id: string;
              category: string;
              title: string;
              user: string;
              imageUrl: string;
            }) => (
              <div key={post._id}>
                <Link href={`/Blogs/${post._id}`}>
                  <div className="border">
                    <Image
                      height={1200}
                      width={1200}
                      src={post.imageUrl}
                      className="aspect-video w-full rounded-md"
                      alt="blog image"
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
                  <button
                    onClick={() => handleLikes(post._id)}
                    className="hover:pointer"
                  >
                    👍
                  </button>
                  <Suspense fallback={<div>Loading...</div>}>
                    <LikeCount postId={post._id} />
                  </Suspense>
                  <Drawer.Root>
                    <Drawer.Trigger asChild>
                      <button>📩</button>
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
