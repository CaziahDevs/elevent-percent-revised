import Image from "next/image";

import walk1 from "./public/walkout-1.jpg"
export default function Home() {
  return (
    <>
      <div className="flex justify-center mt-5">
        <Image
          src={walk1}
          alt=""
          width={600}
          height={600}
        />
      </div>
      <p className="text-center mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dignissimos, sint iusto, nesciunt corrupti quidem quaerat natus quibusdam reprehenderit laboriosam cupiditate ex in delectus quam placeat rerum alias? Vitae, iusto!</p>


    </>
  );
}
