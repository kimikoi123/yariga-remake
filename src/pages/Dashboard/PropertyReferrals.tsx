
import PropertyReferralsBar from "../../components/dashboard/PropertyReferralsBar"
import { propertyReferralsData } from "../../data/data"


export default function PropertyReferrals() {
  return (
    <div className="bg-white col-span-full lg:col-span-4 rounded-3xl p-5">
      <div className="pb-4 font-bold text-xl">Property Referrals</div>
      <div>
        {propertyReferralsData.map(data => (
            <PropertyReferralsBar key={data.title} {...data} />
        ))}
      </div>
    </div>
  )
}
