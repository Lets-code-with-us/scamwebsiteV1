"use client";
import React from "react";
import { WarningBanner } from "@/components/component/warningBanner";
import { useState, useEffect } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

function Page() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImage] = useState("");
  const [content, setContent] = useState("");
  const [category, setcatgory] = useState("");
  const [imagelink, setImageLink] = useState("");
  const [disabled, setDisabled] = useState(false);
  const Router = useRouter();

  const theme = "snow";

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],

      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],

      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["link"],
      [{ color: [] }, { background: [] }],

      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const placeholder = "Compose an epic...";

  const formats = ["bold", "italic", "underline", "strike"];

  const { quill, quillRef } = useQuill({
    theme,
    modules,
    formats,
    placeholder,
  });
  useEffect(() => {
    if (title.length > 0 && content.length > 0 && category.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [title, content, category]);

  // update Content
  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta: any, oldDelta: any, source: any) => {
        setContent(quill.root.innerHTML);
      });
    }
  }, [quill]);

  // upload image
  async function uploadImage(result: any) {
    setImage(result.info.secure_url);
    setImageLink(result.info.secure_url);
  }

  // post blog
  async function postblog() {
    try {
      const data = await axios.post("/api/user/blog", {
        title,
        imageUrl,
        category,
        content,
      });
      const response = await data;
      if (response) {
        toast.success("Blog SuccessFully added");
        Router.push("/trend");
        
      }
    } catch (error: any) {
      if (
        (error.response && error.response.status === 404) ||
        (error.response && error.response.status === 400)
      ) {
        toast.error("Something Went Wrong");
      } else {
        toast.error("Something went wrong");
      }
    }
  }
  return (
    <>
      <div>
        <Toaster />
      </div>
      <WarningBanner />
      <div className="px-10 md:px-40 pt-20 pb-40">
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
              Image{" "}
            </label>
            <div className="mt-2 flex flex-col items-center ">
              <CldUploadButton
                className="bg-green-400 rounded-full px-6 py-2"
                onUpload={uploadImage}
                uploadPreset="ncny6y3n"
              />

              <div className="flex flex-1 items-center justify-center pt-5">
                <Image
                  width={600}
                  height={600}
                  src={
                    imagelink
                      ? imagelink
                      : "https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt={"image preview"}
                />
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
            <div className="mt-2 mb-2">
              {/* editor */}
              <div className="w-100 h-40 md:w-[80rem] md:h-[20rem]">
                <div ref={quillRef} />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-5 mt-[10rem] md:mt-[5rem]">
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

export default Page;
