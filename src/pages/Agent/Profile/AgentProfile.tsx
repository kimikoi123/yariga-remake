export default function AgentProfile() {
  return (
    <section className="p-5">
      <div className="text-3xl font-bold ">Add New Agent</div>
      <div className="mt-5 rounded-xl bg-white relative">
        <img
          className="w-full h-[150px] md:h-[350px] object-cover object-center rounded-t-xl"
          src="/random.jpg"
          alt=""
        />
        <img
          className="absolute left-0 top-[100px] md:top-80 md:left-10 w-[100px] h-[100px] rounded-full object-cover object-center border-4 border-white"
          src="/person-01.png"
          alt=""
        />
        <div className="p-4">
          <div className="flex gap-4 justify-end">
            <button className="p-2 border rounded">Cancel</button>
            <button className="p-2 rounded bg-primary text-white">Save</button>
          </div>
          <div className="text-xl font-bold mt-5">My details</div>
          <form className="grid grid-cols-1 md:grid-cols-2 w-full md:max-w-[1300px] gap-x-10 gap-y-5 mt-4 mb-16">



            <div className="flex flex-col">
              <label htmlFor="first-name">First Name</label>
              <input
                className="border rounded-lg px-4 py-3 outline-none"
                type="text"
                id="first-name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="last-name">Last Name</label>
              <input
                className="border rounded-lg px-4 py-3 outline-none"
                type="text"
                id="last-name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone">Phone</label>
              <input
                className="border rounded-lg px-4 py-3 outline-none"
                type="tel"
                id="phone"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="birth-date">Date of Birth</label>
              <input
                className="border rounded-lg px-4 py-3 outline-none"
                type="date"
                id="birth-date"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="gender">Gender</label>
              <select
                className="border rounded-lg px-2 py-3 outline-none "
                id="gender"
              >
                <option value="" disabled>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                className="border rounded-lg px-4 py-3 outline-none"
                type="email"
                id="email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="country">Country</label>
              <select
                className="border rounded-lg px-2 py-3 outline-none "
                id="gender"
              >
                <option value="" disabled>
                  Country
                </option>
                <option value="male">Philippines</option>
                <option value="female">America</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="properties">Properties</label>
              <input
                className="border rounded-lg px-4 py-3 outline-none"
                type="number"
                id="properties"
              />
            </div>
            <div className="flex flex-col col-span-full border rounded-lg py-5 hover:bg-[#00000020]">
              <label
                className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer"
                htmlFor="dropzone-file"
              >
                <div className="bg-secondary w-[40px] h-[40px] rounded-full grid place-items-center">
                  <img src="/dropzone.svg" alt="" />
                </div>

                <div>Click to upload or drag and drop</div>
                <div>SVG, PNG, JPG or GIF (max, 800x400px)</div>
                <input className="hidden" type="file" id="dropzone-file" />
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
