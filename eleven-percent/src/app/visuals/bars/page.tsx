'use client'
import { useState } from "react";
import BarButtons from '../../components/bars/BarButtons';
import AllStudentsBarGraph from "./graphs/AllStudentsBarGraph";
import GradBarGraph from "./graphs/GradBarGraph";
import UndergradBarGraph from "./graphs/UndergradBarGraph";

export default function bars() {
    const [graph, setGraph] = useState('AllStudentsBar')
    let displayGraph;
    switch (graph) {
        case 'AllStudentsBar':
            displayGraph = <AllStudentsBarGraph/>;
            break;
        case 'UndergradBar':
            displayGraph = <UndergradBarGraph/>;
            break;
        case 'GradBar':
            displayGraph = <GradBarGraph/>;
            break;
        default:
            displayGraph = <AllStudentsBarGraph/>;
            break;
    }
    return (
        <div className="container text-center">
            {displayGraph}
            <BarButtons setGraph={setGraph} />
        </div>
    );
}