
import ReactApexChart from "react-apexcharts"
import { normalFormatter } from "../utils/formatter"
import { ApexOptions } from "apexcharts"

interface DashboardPieGraphProps {
    title: string
    amount: number
    color: string
}

export default function DashboardPieGraph({ title, amount, color } : DashboardPieGraphProps) {

  const options: ApexOptions =  {
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
          size: "20%",
        },
      },
    },
    colors: [color],
    labels: [""],
  }

  return (
    <div className="flex items-center justify-between bg-white px-5 rounded-3xl">
      <div className="flex flex-col gap-2">
        <div>{title}</div>
        <div className="font-bold text-3xl">{normalFormatter(amount)}</div>
      </div>
      <ReactApexChart
        options={options}
        series={[70]}
        type="radialBar"
        height={150}
        width={70}
      />
    </div>
  )
}
