import Link from "next/link";

export default function Header() {
  return (
    <header className="container flex items-center justify-between py-4 px-6 w-full mx-auto">
      <Link href='/' className="font bold text-xl">The Eleven Percent Project</Link>
      <nav className="flex gap-5 *:py-2 *:px-4 *:rounded-md">
        <Link href='/about' className="bg-gray-200 ">About</Link>
        <Link href='/visuals' className="bg-blue-600 text-white">Visualization</Link>
      </nav>
    </header>
  );
}