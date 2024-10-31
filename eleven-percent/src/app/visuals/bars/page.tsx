'use client'
import { useState } from "react";
import BarButtons from '../../components/GraphButtons';
import AllStudentsBarGraph from "./graphs/AllStudentsBarGraph";
import GradBarGraph from "./graphs/GradBarGraph";
import UndergradBarGraph from "./graphs/UndergradBarGraph";

import total_grad from '../../data/total-grad.json'

const yearValues = [
    1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2022
];

export default function Bars() {
    const [graph, setGraph] = useState('GradBar')
    let displayGraph;
    switch (graph) {
        case 'AllStudentsBar':
            displayGraph = <AllStudentsBarGraph />;
            break;
        case 'UndergradBar':
            displayGraph = <UndergradBarGraph />;
            break;
        case 'GradBar':
            displayGraph = <GradBarGraph total_grad={total_grad} tickValues={yearValues} />;
            break;
        default:
            displayGraph = <GradBarGraph total_grad={total_grad} tickValues={yearValues} />;
            break;
    }

    return (
        <main className="flex-1 relative mt-[72px]">
            <div className="max-w-[95vw] mx-auto overflow-x-auto">
                <div className="min-h-screen pb-8">
                    {displayGraph}
                    <BarButtons setGraph={setGraph} />
                </div>
            </div>
        </main>
    );
}