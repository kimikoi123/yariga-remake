import DashboardPieGraph from "../../components/DashboardPieGraph"
import { dashboardPieData } from "../../data/data"
import PropertyList from "./PropertyList"
import PropertyReferrals from "./PropertyReferrals"
import TotalRevenue from "./TotalRevenue"

export default function Dashboard() {
  return (
    <section>
      <div className="text-3xl font-bold pb-5 pt-2">Dashboard</div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-4 gap-10">
          {dashboardPieData.map((data, index) => (
            <DashboardPieGraph key={index} {...data} />
          ))}
        </div>
        <div className="grid grid-cols-12 gap-5">
          <TotalRevenue />
          <PropertyReferrals />
        </div>
        <PropertyList />
      </div>
    </section>
  )
}
