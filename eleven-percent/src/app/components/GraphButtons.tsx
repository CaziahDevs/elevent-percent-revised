import React from 'react'
import GraphButton from './GraphButton'

const BarButtons : React.FC<{ setGraph: (graphName: string) => void}> = ({setGraph}) => {
  return (
    <div className='flex bg-[#d2af85] justify-around py-6  rounded-md'>
        <GraphButton setGraph={setGraph} graphName='AllStudentsBar'/>
        <GraphButton setGraph={setGraph} graphName='UndergradBar'/>
        <GraphButton setGraph={setGraph} graphName='GradBar'/>
    </div>
    
  )
}

export default BarButtons