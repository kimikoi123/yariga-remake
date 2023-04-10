import DashboardPieGraph from "../../components/DashboardPieGraph"
import { dashboardPieData } from "../../data/data"
import LatestSales from "./LatestSales"
import PropertyList from "./PropertyList"
import PropertyReferrals from "./PropertyReferrals"
import TopAgent from "./TopAgent"
import TotalRevenue from "./TotalRevenue"
import Customer from "./Customer"

export default function Dashboard() {
  return (
    <section>
      <div className="text-3xl font-bold pb-5 pt-2">Dashboard</div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {dashboardPieData.map((data, index) => (
            <DashboardPieGraph key={index} {...data} />
          ))}
        </div>
        <div className="grid grid-cols-12 gap-5">
          <TotalRevenue />
          <PropertyReferrals />
        </div>
        <div className="grid grid-cols-12 gap-5">
          <TopAgent />
          <Customer />
          <LatestSales />
        </div>
        <PropertyList />
      </div>
    </section>
  )
}
