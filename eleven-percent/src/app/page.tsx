import Image from "next/image";

import walk1 from "./public/walkout-1.jpg"
import walk2 from "./public/walkout-2.jpg"
import walk3 from "./public/walkout-3.jpg"
export default function Home() {
  return (
    <>
      <div
        className="flex justify-content"
        >
          <Image
            src={walk1}
            alt=""
            width={800}
            height={800}
             />
      </div>

      
    </>
  );
}
