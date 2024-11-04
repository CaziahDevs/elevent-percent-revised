import React from 'react'
import { VictoryChart, VictoryTheme, VictoryAxis, VictoryBar, VictoryLabel } from 'victory'

type Props  = {
  total_students: { Year: number; 'TOTAL STUDENTS': number; 'TOTAL BLACK STUDENTS': number }[], 
  tickValues: number[] 
}

const AllStudentsPGraph:React.FC<Props> = ({total_students, tickValues}) => {
  return (
    <div className="relative z-0">
            <div className="w-full overflow-x-auto">
                <div className="min-w-[1500px] px-4n text-center">
                    <h3 className='text-lg underline'>Growth of the Total Black Student Population vs Total Students</h3>
                </div>
            </div>
        </div>
  )
}

export default AllStudentsPGraph