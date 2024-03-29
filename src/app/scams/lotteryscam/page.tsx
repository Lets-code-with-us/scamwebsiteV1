import React from "react";
import Image from "next/image";
function page() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Tech Support Scams
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            In these scams, fraudsters pose as technical support representatives
            from reputable companies like Microsoft or Apple. They may contact
            victims via phone calls or pop-up messages, claiming that the
            victim's computer has a virus or issue that requires immediate
            attention and payment for a fake service.
          </p>
        </div>
        <div className="w-full space-y-2">
          <Image
            width={10000}
            height={10000}
            className="h-[100px] w-full rounded-xl object-fill md:h-full"
            src="https://images.pexels.com/photos/6963099/pexels-photo-6963099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default page;
