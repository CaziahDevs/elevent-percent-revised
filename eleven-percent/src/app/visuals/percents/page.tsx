'use client'
import BarButtons from "@/app/components/GraphButtons";
import { useState } from "react";
import AllStudentsPGraph from "./graphs/AllStudentsPGraph";
import GradPGraph from "./graphs/GradPGraph";
import UndergradPGraph from "./graphs/UndergradPGraph";

export default function Percents() {
    const [graph, setGraph] = useState('AllStudentsBar')
    let displayGraph;
    switch (graph) {
        case 'AllStudentsBar':
            displayGraph = <AllStudentsPGraph />;
            break;
        case 'UndergradBar':
            displayGraph = <UndergradPGraph />;
            break;
        case 'GradBar':
            displayGraph = <GradPGraph />;
            break;
        default:
            displayGraph = <AllStudentsPGraph />;
            break;
    }
    return (
        <div className="container text-center">
            {displayGraph}
            <BarButtons setGraph={setGraph} />
        </div>
    );
}