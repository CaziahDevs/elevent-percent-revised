import React from 'react'
import GraphButton from './GraphButton'

const GraphButtons : React.FC<{ setGraph: (graphName: string) => void}> = ({setGraph}) => {
  return (
    <div className='flex bg-[#d2af85] justify-around py-6  rounded-md mt-6'>
        <GraphButton setGraph={setGraph} graphName='All Students'/>
        <GraphButton setGraph={setGraph} graphName='Undergraduate'/>
        <GraphButton setGraph={setGraph} graphName='Graduate'/>
    </div>
    
  )
}

export default GraphButtons