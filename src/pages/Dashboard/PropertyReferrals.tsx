
import PropertyReferralsBar from "../../components/PropertyReferralsBar"
import { propertyReferralsData } from "../../data/data"


export default function PropertyReferrals() {
  return (
    <div className="bg-white col-span-4 rounded-3xl p-5">
      <div className="pb-4 font-bold text-xl">Property Referrals</div>
      <div>
        {propertyReferralsData.map(data => (
            <PropertyReferralsBar {...data} />
        ))}
      </div>
    </div>
  )
}
