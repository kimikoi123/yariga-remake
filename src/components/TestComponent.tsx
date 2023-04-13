import { ApexOptions } from "apexcharts"
import ReactApexChart from "react-apexcharts"

export default function TestComponent({ color } : { color: string }) {
  const options: ApexOptions = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            show: true,
          },
          value: {
            show: false,
            fontSize: "14px",
          },
          total: {
            show: false,
            label: "Total",
          },
        },
        hollow: {
          size: "40%",
        },
      },
    },
    colors: [color],
    labels: [""],
  }

  return (
    <ReactApexChart
        options={options}
        series={[70]}
        type="radialBar"
        height={120}
        width={90}
      />
  )
}
