import React from 'react'
import { VictoryChart, VictoryTheme, VictoryAxis, VictoryBar, VictoryLabel } from 'victory'

type Props = {
  total_undergrad: { "Year": number; 'TOTAL STUDENTS': number; 'TOTAL BLACK STUDENTS': number }[],
  tickValues: number[]
}

const UndergradPGraph: React.FC<Props> = ({ total_undergrad, tickValues }) => {
  return (
    <div className="relative z-0">
      <div className="w-full overflow-x-auto">
        <div className="min-w-[1500px] px-4n text-center">
          <h3 className='text-lg underline'>Growth of the Total Black Undergraduate Student Population vs Total Undergraduates</h3>
          <VictoryChart
            theme={VictoryTheme.clean}
            width={1500}
            height={800}
            domainPadding={{ x: 20 }}
            domain={{ x: [1980, 2022] }}
            padding={{ top: 50, bottom: 120, left: 120, right: 50 }}
          >

            <VictoryAxis
              tickValues={tickValues}
              style={{
                tickLabels: {
                  fontSize: 15,
                  angle: -45,
                  textAnchor: 'end',
                  fontWeight: 'bold'
                },
                axisLabel: { fontSize: 20, padding: 80, fontWeight: 'bold' }
              }}
              label="Year"
            />

            <VictoryAxis
              dependentAxis
              style={{
                tickLabels: {
                  fontSize: 15,
                  angle: -45,
                  textAnchor: "end",
                  padding: 5,
                  fontWeight: 'bold'
                },
                axisLabel: { fontSize: 20, padding: 60, fontWeight: 'bold' }
              }}
              label="Number of Students"
            />
          </VictoryChart>
        </div>
      </div>
    </div>
  )
}

export default UndergradPGraph