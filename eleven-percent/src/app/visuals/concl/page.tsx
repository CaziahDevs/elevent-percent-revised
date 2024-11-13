export default function Concl() {
    return (
        <div>
            <h1 className="text-3xl my-5 font-bold underline text-center">Conclusions</h1>

            <div className="mt-4 gap-4  border-black border-4 p-2 ">
                <h2 className="text-2xl font-bold  ">Breaking Down the Data</h2>
                <h3 className="text-xl underline my-2">Understanding the Categories</h3>
                <div>
                    <li className="my-2 py-2 text-lg">
                        IPEDS captures the following racial/ethnic categories: American Indian or Alaska Native,
                        Asian, Black or African American, Hispanic, Native Hawaiian or Other Pacific Islander,
                        White, Two or more races, race/ethnicity unknown, and U.S. non-resident.
                    </li>
                    <li className="my-2 text-lg">
                        The nature of how the data was collected obscures our understanding of the afro-latinx
                        population’s growth at Brown. There’s no way to quantify the overlap between students
                        who identified as black and hispanic with the data that I had access to. Historically,
                        students only had the option for “Black, not hispanic” among the choices in demographic
                        surveys, which forces those of afro-latinx descent to choose between their heritages.
                    </li>
                    <li className="my-2 text-lg">This presents a key challenge when measuring racial/ethnic diversity</li>
                    <li className="my-2 text-lg">
                        For the purposes of this study, I’ve focused on comparing the percentage of Black students
                        against the total student population broken down by total students, undergraduates, and
                        graduate students to illustrate the general stagnation of black student growth.
                    </li>
                </div>
            </div>

            <div className="mt-4 gap-4  border-black border-4 p-2 ">
                <h2 className="text-2xl font-bold my-2 ">General Trends</h2>

                <h3 className="text-xl underline my-4 ">Total Black Students</h3>
                <li className="px-2 text-xl">While the total population (including black students) grew from 2007 to 2008,
                    the total black student population grew at a slower rate, resulting in an overall decrease in </li>
                <h3 className="text-xl underline my-4">Total Black Undergraduate Students</h3>
                <h3 className="text-xl underline my-4">Total Black Graduate Students</h3>
            </div>

            <div className="mt-4 gap-4  border-black border-4 p-2 ">
                <h2 className="text-2xl font-bold my-2">Closing Thoughts</h2>

                <h3 className="text-xl underline my-4">Affirmative Action & Shifts in diversity at Brown</h3>
                <h3 className="text-xl underline my-4">The impact of discrimination on students</h3>
                <h3 className="text-xl underline my-4">The role of data visualization in understanding trends</h3>
            </div>
        </div>
    );
}