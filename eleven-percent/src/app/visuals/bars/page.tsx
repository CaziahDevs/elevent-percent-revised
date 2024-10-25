'use client'
import { useState } from "react";
import BarButtons from '../../components/bars/BarButtons';
import AllStudentsBarGraph from "./graphs/AllStudentsBarGraph";
import GradBarGraph from "./graphs/GradBarGraph";
import UndergradBarGraph from "./graphs/UndergradBarGraph";

import total_grad from '../../../../../data/total-grad.json';
import total_undergrad from '../../../../../data/total-undergrad.json'
import total_students from '../../../../../data/total-students.json';

const yearValues =
    [1980, 1984, 1986, 1988,
        1990, 1991, 1992, 1993, 1994,
        1995, 1996, 1997, 1998, 1999,
        2000, 2001, 2002, 2003, 2004,
        2005, 2006, 2007, 2008, 2009,
        2010, 2011, 2012, 2013, 2014,
        2015, 2016, 2017, 2018, 2019, 
        2020, 2021, 2022
    ]

export default function bars() {
    const [graph, setGraph] = useState('AllStudentsBar')
    let displayGraph;
    switch (graph) {
        case 'AllStudentsBar':
            displayGraph = <AllStudentsBarGraph />;
            break;
        case 'UndergradBar':
            displayGraph = <UndergradBarGraph />;
            break;
        case 'GradBar':
            displayGraph = <GradBarGraph total_grad={total_grad} tickValues={yearValues}/>;
            break;
        default:
            displayGraph = <AllStudentsBarGraph />;
            break;
    }

    return (
        <div className="container text-center">
            {displayGraph}
            <BarButtons setGraph={setGraph} />
        </div>
    );
}