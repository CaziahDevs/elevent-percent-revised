import Image from "next/image";

import walk1 from "./public/walkout-1.jpg"
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex justify-center mt-10">
        <Image
          className="border-8 border-[#d2af85]"
          src={walk1}
          alt=""
          width={600}
          height={600}
        />
      </div>
      <p className="text-center mt-6 text-lg">
        <u>
          "In 1968, 65 of the 85 African American men and women enrolled at
          Brown marched down College Hill to the Congdon Street Baptist Church to
          protest the small number of black students admitted to the University as
          well as a lack of support when they attended. At the time, only <b>2.3 percent </b>
          of Brown students were African American; the protestors demanded a path to raise that number to
          <b> 11 percent</b>, to match the U.S. population overall."
        </u>
        <Link
          href={"https://www.brown.edu/about/history/timeline/black-student-walkout"}
          className="transition ease-in-out hover:underline hover:font-bold"
        >  
          - Brown University, History
        </Link>

      </p>
      <p className="text-center mt-2 font-extrabold"><u>This is the Eleven Percent Project.</u></p>


    </>
  );
}
