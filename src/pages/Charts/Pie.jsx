import React from 'react'
import { Header } from '../../components'
import PieC from '../../components/Charts/Pie'
import { pieChartData } from '../../data/dummy'

const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Charts" title="Pie Chart" /><PieC id="pie" data={pieChartData} legendVisiblity="true" height="600px" /></div>
  )
}

export default Pie