

import ReactApexChart from "react-apexcharts"
import { ApexOptions } from "apexcharts"


export default function TotalRevenueChart() {
    const options: ApexOptions = {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '65%',
            borderRadius: 3,
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        },
        colors: ['#475BE8', '#CFC8FF']
      }

      const series = [{
        name: 'Last Month',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: 'Running',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }]




  return (
    <div>
        <ReactApexChart options={options} series={series} type="bar" height={380}/>
    </div>
  )
}
