import { Inject, Sparkline, SparklineComponent, SparklineTooltip } from '@syncfusion/ej2-react-charts'
import React from 'react'

const Spark = ({id,height,width,color,data,type,currentColor}) => {
  console.log("Here")
  return (
    <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible: false,
          },
        }}
        markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
  )
}

export default Spark