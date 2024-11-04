import React from 'react'
import { VictoryChart, VictoryTheme, VictoryAxis, VictoryBar, VictoryLabel } from 'victory'

type Props = {
  total_students: { "Year": number; 'TOTAL STUDENTS': number; 'TOTAL BLACK STUDENTS': number }[],
  tickValues: number[]
}
const AllStudentsBarGraph:React.FC<Props> = ({ total_students, tickValues }) => {
  return (
    <div className="relative z-0">
      <div className="w-full overflow-x-auto">
        <div className="min-w-[1500px] px-4n text-center">
          <h3 className='text-lg underline'>
            <b>
              Growth of the Total Black Student Population vs the Total Population
            </b>
          </h3>
          <VictoryChart
            theme={VictoryTheme.clean}
            width={1500}
            height={800}
            domainPadding={{ x: 20 }}
            domain={{ x: [1980, 2022] }}
            padding={{ top: 50, bottom: 120, left: 120, right: 50 }}
          >
            <VictoryBar
              data={total_students}
              x="Year"
              y="TOTAL STUDENTS"
              barRatio={0.7}
              labels={({ datum }) => `${datum['TOTAL STUDENTS'].toLocaleString()}`}
              labelComponent={
                <VictoryLabel
                  angle={-45}
                  dx={20}
                  dy={-10}
                  style={[
                    { fill: "black", fontSize: 15 }
                  ]}
                />
              }
            />

            <VictoryBar
              style={{ data: { fill: "#c43a31" } }}
              data={total_students}
              x="Year"
              y="TOTAL BLACK STUDENTS"
              labels={({ datum }) => `${datum['TOTAL BLACK STUDENTS']}`}
              labelComponent={
                <VictoryLabel
                  style={[
                    { fill: "white", fontSize: 15 }
                  ]}
                />
              }
            />

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

export default AllStudentsBarGraph