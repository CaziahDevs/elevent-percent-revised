import "./style.css";
import Image from "next/image";
import me from "../public/me.jpg";
export default function about() {
    return (
        <div>
            <div className="">
                <h3 className="text-xl font-bold underline text-center">The Author</h3>
                <div className="flex mt-4 gap-4 text-center border-black border-4 p-2 ">
                    <div className="hidden md:block">
                        <Image

                            src={me}
                            alt="A picture of me, Caziah Mayers."
                            width={350}
                            height={250}
                        />
                    </div>
                    <p className="lg:mt-14 md:mt-5 sm:mt-0 text-lg">
                        I’m Caziah Mayers, a full stack software engineer and recent graduate from Brown University's class of 2024 where I earned my bachelor’s in Computer Science
                        and Africana Studies. I’m deeply invested in ethical computing and full stack development, and I’d like to learn more about cloud
                        engineering.
                    </p>
                </div>
            </div>
            <div className="mt-4 ">
                <h3 className="text-xl font-bold underline text-center mt-4">The Project</h3>
                <div className="border-black border-4 p-2 mt-4 px-4">
                    <p className="mt-4 text-lg ">The Elevent Percent project is a data visualization that tells the story of the growing black student population at Brown University over the last forty years. It's one of my capstone projects that I created as I concluded my time at Brown. </p>
                    <p className="mt-4 text-lg ">I named it for the demands of the Black students that walked out in protest of Brown’s biased admissions policies in 1968; One of which was that the Black student population be increased to 11% to match the national racial breakdown at the time.</p>
                    <h4 className="text-center font-bold underline mt-2">Tech Stack</h4>
                    <ul className="list-disc list-inside text-lg mt-2">
                        <li>Next.js</li>
                        <li>Tailwind CSS</li>
                        <li>Victory.js</li>
                        <li>Python</li>
                        <li>Vercel</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-bold underline text-center mt-4">The Data</h3>
                <div className="border-black border-4 p-2 mt-4 ">
                    <p className="text-lg ">
                        I gathered the data for this project from the Integrated Postsecondary Education
                        Data System maintained by the National Center for Education Statistics. The
                        project uses this data to create visualizations that showcase the growth of the
                        black student population over time.
                    </p>
                    <p className="text-lg mt-2">
                        I compiled the data by hand, organizing it in a Google spreadsheet. Then, I converted the data to jsons for the frontend to render with the Victory.js library.
                    </p>
                </div>
            </div>
        </div>
    );
}