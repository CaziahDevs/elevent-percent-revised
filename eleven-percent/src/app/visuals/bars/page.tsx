'use client'
import { useState } from "react";
import BarButtons from '../../components/GraphButtons';
import AllStudentsBarGraph from "./graphs/AllStudentsBarGraph";
import GradBarGraph from "./graphs/GradBarGraph";
import UndergradBarGraph from "./graphs/UndergradBarGraph";

import total_grad from '../../data/total-grad.json'

const years = [1980, 1984, 1986, 1988, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
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
            displayGraph = <GradBarGraph total_grad={total_grad} tickValues={years} />;
            break;
        default:
            displayGraph = <GradBarGraph total_grad={total_grad} tickValues={years} />;
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