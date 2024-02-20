import React from "react";
import Link from "next/link";
function page() {
  return (
    <div>
      Profile page
      <div className="flex flex-1 items-center justify-center gap-5 mb-20">
        <Link href="/addBlog">
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Add Blog
          </button>
        </Link>

        <Link href="/bio">
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Add Bio
          </button>
        </Link>
      </div>
    </div>
  );
}

export default page;
