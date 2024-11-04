import React from 'react'

const GraphButton: React.FC<{ setGraph: (graphName: string) => void, graphName: string }> = ({ setGraph, graphName }) => {
    return (
        <div className='bg-gray-200 rounded-md py-2 px-4 transition ease-in-out hover:bg-gray-400 hover:drop-shadow-lg hover:text-white'>
            <button onClick={
                () => {
                    setGraph(graphName)
                    console.log(graphName)
                }}>
                {graphName}
            </button>
        </div>
    )
}

export default GraphButton