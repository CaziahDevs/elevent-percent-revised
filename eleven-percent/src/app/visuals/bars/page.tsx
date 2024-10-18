'use client'
import { useState } from "react";
import BarButtons from '../../components/bars/BarButtons';
export default function bars() {
    const [graph, setGraph] = useState('AllStudentsBar')
    let displayGraph;
    switch (graph) {
        case 'AllStudentsBar':
            displayGraph = <div>AllStudentsBar</div>;
            break;
        case 'UndergradBar':
            displayGraph = <div>UndergradBar</div>;
            break;
        case 'GradBar':
            displayGraph = <div>GradBar</div>;
            break;
        default:
            displayGraph = <div>AllStudentsBar</div>;
            break;
    }
    return (
        <div className="container text-center">
            {displayGraph}
            <BarButtons setGraph={setGraph} />
        </div>
    );
}