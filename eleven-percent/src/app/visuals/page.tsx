'use client'
import Link from "next/link";
export default function Visuals() {
    return (

        <div className="max-h-full bg-[#d2af85] mb-4">
            <div className="bg-amber-600 w-full h-20 py-4 sm:py-2">
                <div className="container mx-auto w-full  md:py-4">
                    <h2 className="text-2xl font-bold text-center ">Visualizations</h2>
                </div>
            </div>
            <div className="container p-4 grid md:grid-cols-3 gap-10 align-middle text-center ">
                <Link
                    href={'/visuals/percents'}
                    className="bg-white hover:bg-gray-200 
                    transition ease-in-out 
                    shadow-md rounded-lg p-6
                    border-black border-x-1 border-t-1"
                >
                    Percentage
                </Link>
                <Link
                    href={'/visuals/bars'}
                    className="
                    bg-white hover:bg-gray-200 
                    transition ease-in-out  
                    shadow-md rounded-lg p-6"
                >
                    Bars
                </Link>
                <Link
                    href={'/visuals/concl'}
                    className="bg-white hover:bg-gray-200 
                    transition ease-in-out  shadow-md rounded-lg p-6 "

                >
                    Conclusions
                </Link>
            </div>

        </div>

    );
}