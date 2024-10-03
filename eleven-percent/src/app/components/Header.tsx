import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 max-w-[1000px] mx-auto w-f flex items-center justify-between ">
      <Link href='/' className="font bold text-xl transition ease-in-out hover:underline ">The Eleven Percent Project</Link>
      <nav className="flex gap-5 *:py-2 *:px-4 *:rounded-md">
        <Link href='/about' className="bg-gray-200 transition ease-in-out hover:bg-gray-400">About</Link>
        <Link href='/visuals' className="bg-blue-600 text-white transition ease-in-out hover:bg-sky-700">Visualization</Link>
      </nav>
    </header>
  );
}