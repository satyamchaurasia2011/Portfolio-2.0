import React, { useEffect, useState } from "react";

import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";
function BackToTop() {
  const [isTop, setIsTop] = useState<boolean>(true);
//   useEffect(() => {
//     if (
//       document.body.scrollTop > 20 ||
//       document.documentElement.scrollTop > 20
//     ) {
//       setIsTop(true);
//     } else {
//       setIsTop(false);
//     }
//   }, []);

  const handleUpArrow = () => {
    console.log("first");
    console.log(window.scrollX)
  };
  return (
    <div
      onClick={handleUpArrow}
      className={`${
        !isTop && "hidden"
      } fixed bottom-10 right-16 rounded-full p-3 bg-gray-500 hover:bg-[#0af7ef]/40 cursor-pointer`}
    >
      <ArrowSmallUpIcon className="text-black w-5" fontWeight={800} />
    </div>
  );
}

export default BackToTop;
