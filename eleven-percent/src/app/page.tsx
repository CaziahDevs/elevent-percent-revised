import Image from "next/image";
import walk1 from "./public/walkout-1.jpg"
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex justify-center mt-6 ">
        <Image
          className=" rounded-md transition ease-in-out shadow-2xl"
          src={walk1}
          alt=""
          sizes="(max-width: 1024px) 600px"
          height={600}
        />
      </div>
      <div className="text-center mt-6 text-xl hover:underline transition ease-in-out font-bold">
        <Link
          href={"https://www.brown.edu/about/history/timeline/black-student-walkout"}
        >
          {"\"In 1968, 65 of the 85 African American men and women enrolled at Brown marched down College Hill to the Congdon Street Baptist Church to protest the small number of black students admitted to the University as well as a lack of support when they attended. At the time, only "}
          <b>{"2.3 percent"}</b>
          {" of Brown students were African American; the protestors demanded a path to raise that number to "}
          <b>{"11 percent"}</b>
          {", to match the U.S. population overall.\"  - Brown University, History"}
        </Link>
      </div>
      <p className="text-center mt-4 text-3xl font-extrabold"><u>{"This is the Eleven Percent Project."}</u></p>
    </>
  );
}