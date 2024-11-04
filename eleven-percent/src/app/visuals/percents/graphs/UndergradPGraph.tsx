import React from 'react'
import { VictoryChart, VictoryTheme, VictoryAxis, VictoryLine, VictoryLabel } from 'victory'

type Props = {
  total_undergrad: { "Year": number; 'TOTAL STUDENTS': number; 'TOTAL BLACK STUDENTS': number }[],
  tickValues: number[],
  percentRange: number[],
}

const UndergradPGraph: React.FC<Props> = ({ total_undergrad, tickValues, percentRange }) => {
  return (
    <div className="relative z-0">
      <div className="w-full overflow-x-auto">
        <div className="min-w-[1500px] px-4n text-center">
          <h3 className='text-lg underline'>
            <b>
              Percentage of the Undergraduate Student Population that is Black
            </b>
          </h3>
          <VictoryChart
            theme={VictoryTheme.clean}
            width={1500}
            height={600}
            domainPadding={{ x: 20 }}
            domain={{ x: [1980, 2022] }}
            padding={{ top: 50, bottom: 120, left: 120, right: 50 }}
          >
            <VictoryLine
              data={total_undergrad}
              x="Year"
              y="PERCENTAGE"
              labels={({ datum }) => `${datum['PERCENTAGE'].toLocaleString()}`}
              labelComponent={
                <VictoryLabel
                  angle={-30}
                  dx={20}
                  dy={-10}
                  style={[
                    { fill: "black", fontSize: 15 }
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
              tickValues={percentRange}
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
              label="Percentage"
            />
          </VictoryChart>
        </div>
      </div>
    </div>
  )
}

export default UndergradPGraph