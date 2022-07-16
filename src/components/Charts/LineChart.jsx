import React from 'react'
import {ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,Legend,DateTime,Tooltip, LineSeries} from '@syncfusion/ej2-react-charts';
import { lineChartData, lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';


const LineChart = () => {
  const { currentColor, currentMode } = useStateContext();
  return (
   
    <ChartComponent
      id="lineChart"
      height='420px'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      tooltip={{enable:true}}
      background={currentMode === 'Dark' ? '#33373e' : '#fff'}
    >
      <Inject services={[Legend,DateTime,Tooltip,LineSeries]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/>)}
        
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart