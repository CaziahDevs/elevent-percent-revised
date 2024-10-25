import React from 'react'
import { VictoryChart, VictoryTheme, VictoryAxis, VictoryBar, VictoryLabel } from 'victory'

const GradBarGraph = ({ total_grad, tickValues }) => {
  return (
    <div className=''>
      <VictoryChart
        theme={VictoryTheme.material}
        style={{ parent: { maxWidth: "90%" } }}
        width={1500}
        height={1000}
        domainPadding={{ x: 25 }}
      >
        {/* X axis for years */}
        <VictoryAxis
          tickValues={tickValues}
          domain={{ x: [1980, 2022] }}
        />

        {/* Y axis for student count */}
        <VictoryAxis dependentAxis
          orientation="left"
          domain={{ y: [0, 4000] }}
        />

        


        <p className='label'>Total Graduate Black Students vs Total Graduate Students Bar Graph</p>
      </VictoryChart >
    </div>
  )
}

export default GradBarGraph