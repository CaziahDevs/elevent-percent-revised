import React from 'react'
import { VictoryChart, VictoryTheme, VictoryAxis, VictoryBar, VictoryLabel } from 'victory'


type Props = {
  total_grad: { "Year": number; 'TOTAL STUDENTS': number; 'TOTAL BLACK STUDENTS': number }[],
  tickValues: number[]
}

const GradPGraph: React.FC<Props> = ({ total_grad, tickValues }) => {
  return (
    <div className="relative z-0">
      <div className="w-full overflow-x-auto">
        <div className="min-w-[1500px] px-4n text-center">
          <h3 className='text-lg underline'>Growth of the Total Black graduate Student Population vs Total Graduate Students</h3>
          <VictoryChart
            theme={VictoryTheme.clean}
            width={1500}
            height={800}
            domainPadding={{ x: 20 }}
            domain={{ x: [1980, 2022] }}
            padding={{ top: 50, bottom: 120, left: 120, right: 50 }}
          ></VictoryChart>
        </div>
      </div>
    </div>
  )
}

export default GradPGraph