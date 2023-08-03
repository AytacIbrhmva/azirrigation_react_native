import React from 'react'
import {View, Text, Dimensions} from 'react-native'
import { 
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
 } from 'react-native-chart-kit';


const Chart = () => {
  return (
<View>
  <LineChart
    data={{
      labels: ["B.E", "Ç.A", "Ç", "C.A", "C", "Ş", "B"],
      datasets: [
        {
          data: [12565, 59, 0]
        }
      ]
    }}


    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix="L"
    yAxisInterval={1} // optional, defaults to 1
    withDots={false}
    chartConfig={{
        backgroundGradientToOpacity: 0,
        backgroundGradientFromOpacity: 0,
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, 0.8)`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726",
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
  )
}

export default Chart

