import Link from "next/link";
export default function visuals() {
    return (
        <div className="max-h-full">
            <div className="container p-4 grid grid-cols-3 justify-between align-middle text-center ">
                <Link
                    href={'/visuals/percents'}
                    className="bg-white shadow-md rounded-lg p-6"
                >
                    Percentage
                </Link>
                <Link
                    href={'/visuals/bars'}
                    className="bg-white shadow-md rounded-lg p-6"
                >
                    Bars
                </Link>
                <Link
                    href={'/visuals/stats'}
                    className="bg-white shadow-md rounded-lg p-6"

                >
                    Analysis
                </Link>
            </div>
        </div>

    );
}