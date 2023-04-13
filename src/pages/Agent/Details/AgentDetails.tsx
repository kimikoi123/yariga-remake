import TestComponent from "../../../components/TestComponent";
import PropertyListComponent from "../../../components/property/PropertyListComponent";


export default function AgentDetails() {
  return (
    <section className="p-5">
      <div className="text-3xl font-bold mb-4">Agent Details</div>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-full lg:col-span-1 rounded-lg bg-white relative">
            <img
              className="w-full h-[200px] object-cover object-center rounded-lg"
              src="/random.jpg"
              alt=""
            />
            <img
              className="absolute top-44 left-5 w-[80px] h-[80px] rounded-full object-cover object-center"
              src="/person-01.png"
              alt=""
            />
            <div className="px-5">
              <div className="ml-24 mb-4 mt-2">
                <div className="font-bold">Hussain Ahmed</div>
                <div>Agent</div>
              </div>
              <div className="grid grid-cols-3">
                <div className="col-span-1 text-gray-400 flex flex-col gap-2">
                  <div>Age:</div>
                  <div>City:</div>
                  <div>State:</div>
                  <div>Country:</div>
                  <div>Post Code:</div>
                  <div>Agent ID:</div>
                  <div>Phone:</div>
                  <div>Email:</div>
                </div>
                <div className="col-span-2 font-semibold flex flex-col gap-2">
                  <div>26</div>
                  <div>New York City</div>
                  <div>New York</div>
                  <div>USA</div>
                  <div>1001</div>
                  <div>#18457 865 8745</div>
                  <div>+021 541 236 4580</div>
                  <div>hussain145@gmail.com</div>
                </div>
              </div>
              <div className="flex justify-center gap-5 my-10">
                <div className="w-10 h-10 rounded-full grid place-items-center bg-gray-100"><img src="/logo-fb-.svg" alt="" /></div>
                <div className="w-10 h-10 rounded-full grid place-items-center bg-gray-100"><img src="/logo-instagram.svg" alt="" /></div>
                <div className="w-10 h-10 rounded-full grid place-items-center bg-gray-100"><img src="/logo-twitter.svg" alt="" /></div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-2 bg-white rounded-lg p-5">
            <div className="text-2xl font-semibold">Agent Details</div>
            <hr className="my-5" />
            <div className="my-4">
              Talent customers tend to earn a basic salary in the range of
              £15,000 to £35,000 per annum. However, talented customers also
              earn a commission for finding their client's work. <br/>Typically,
              agents receive around 10% of what the client is paid.
            </div>
            <div className="grid grid-cols-3">
              <div className="col-span-1 flex flex-col gap-2">
                <div className="flex gap-4">
                  <img src="/check-icon.svg" alt="" />
                  <div>Agency</div>
                </div>
                <div className="flex gap-4">
                  <img src="/check-icon.svg" alt="" />
                  <div>Agent License</div>
                </div>
                <div className="flex gap-4">
                  <img src="/check-icon.svg" alt="" />
                  <div>Tax Number</div>
                </div>
                <div className="flex gap-4">
                  <img src="/check-icon.svg" alt="" />
                  <div>Service Area</div>
                </div>
              </div>
              <div className="col-span-2 flex flex-col gap-2">
                <div className="flex gap-10">
                  <div>:</div>
                  <div>All American Real Estate</div>
                </div>
                <div className="flex gap-10">
                  <div>:</div>
                  <div>3124 9764 9700 234</div>
                </div>
                <div className="flex gap-10">
                  <div>:</div>
                  <div>TX 87D0 678H PQ45</div>
                </div>
                <div className="flex gap-10">
                  <div>:</div>
                  <div>Chicago, Los Angeles, New York, Miami beach</div>
                </div>
              </div>
            </div>
            <hr className="my-5" />
            <div>
              <div className="text-2xl font-semibold my-5">Agent Status</div>
              <div className="flex flex-col md:flex-row items-center md:items-start justify-around gap-5 text-center">
                <div className="flex flex-col gap-3 items-center border rounded-lg w-[250px] py-5">
                  <div>Total Listings</div>
                  <div className="text-xl font-bold">1050</div>
                  <TestComponent color='#FE6D8E' />
                </div>
                <div className="flex flex-col gap-3 items-center border rounded-lg w-[250px] py-5">
                  <div>Properties Sold</div>
                  <div className="text-xl font-bold">650</div>
                  <TestComponent color='#2ED480' />
                </div>
                <div className="flex flex-col gap-3 items-center border rounded-lg w-[250px] py-5">
                  <div>Properties Rent</div>
                  <div className="text-xl font-bold">400</div>
                  <TestComponent color='#2F80ED' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-5">
          <div className="flex justify-between items-center pb-3">
            <div className="text-2xl font-semibold">Active Listing</div>
            <button className="border p-2 rounded-lg">View All</button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <PropertyListComponent />
            <PropertyListComponent />
            <PropertyListComponent />
            <PropertyListComponent />
          </div>
        </div>
      </div>
    </section>
  )
}
