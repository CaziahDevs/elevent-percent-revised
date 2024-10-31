import Link from "next/link";

export default function Header() {
  return (
    <header
      className="shadow-inner
    bg-[#d2af85] 
    p-5 px-7 border-b-4 
    border-b-green-700
    sticky top-0 left-0 w-full 
    flex items-center 
    justify-between
    z-50"
    >
      <Link href='/'
        className="font-bold text-xl transition ease-in-out hover:underline hover:drop-shadow-lg "
      >
        The Eleven Percent Project
      </Link>
      <nav className="flex md:gap-5 *:py-2 *:px-4 *:rounded-md sm:gap-3">
        <Link
          href='/about'
          className="bg-gray-200 transition ease-in-out hover:bg-gray-400 hover:drop-shadow-lg"
        >
          About
        </Link>
        <Link
          href='/visuals'
          className="bg-blue-600 text-white transition ease-in-out hover:bg-sky-800 hover:drop-shadow-lg"
        >
          Visualization
        </Link>
      </nav>
    </header>
  );
}