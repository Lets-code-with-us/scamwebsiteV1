'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';
function Page() {
  const [bio, setBio] = useState('');
  const [instagramLink, setLink] = useState('');
  const [LinkedlnLink, setSocial] = useState('');
  const [githubLink, setNextLink] = useState('');
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (
      bio.length > 0 &&
      instagramLink.length > 0 &&
      LinkedlnLink.length > 0 &&
      githubLink.length > 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [instagramLink, bio, LinkedlnLink, githubLink]);

  async function submitBio() {
    const res = await axios.post('/api/user/Bio', {
      bio,
      instagramLink,
      LinkedlnLink,
      githubLink,
    });
    const response = await res;
    if (!response) {
      toast.error('Not able to add Bios');
    } else {
      toast.success('Success');
      router.push('/');
    }
  }
  return (
    <>
      <section>
        <Toaster />
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center"></div>
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              Add Your Bios
            </h2>
            <div className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {' '}
                    About yourself{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => setBio(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Add bios"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {' '}
                      Instagram Profile LInk{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      onChange={(e) => setLink(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Instagram profile Links"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {' '}
                      Linkedln Profile Link{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      onChange={(e) => setSocial(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Linkedln profile Links"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {' '}
                      Github Profile LInk{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      onChange={(e) => setNextLink(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Github profile Links"
                    />
                  </div>
                </div>
                <div>
                  <button
                    onClick={submitBio}
                    disabled={disabled}
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Add <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
