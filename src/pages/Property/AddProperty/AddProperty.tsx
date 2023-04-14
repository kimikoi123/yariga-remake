import React, { useState } from "react"
import { useMainContext } from "../../../contexts/MainContext"






export default function AddProperty() {
    const [propertyName, setPropertyName] = useState('')
    const [propertyDescription, setPropertyDescription] = useState('')
    const [propertyType, setPropertyType] = useState('')
    const [propertyPrice, setPropertyPrice] = useState('')
    const [propertyLocation, setPropertyLocation] = useState('')
    const [propertyPhoto, setPropertyPhoto] = useState('')

    const { userData } = useMainContext()

    async function handleSubmitForm(e: React.SyntheticEvent) {
        e.preventDefault()

        try {
            const body = { propertyName, propertyDescription, propertyType, propertyPrice, propertyLocation, propertyPhoto, userData }
            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/v1/properties`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            console.log(await response.json())


        } catch (err) {
            console.error(err)
        }
    }



  return (
    <div className="p-5">
      <div className="text-3xl font-bold mb-5">Add Property</div>
      <div className="bg-white rounded-2xl p-5 w-full">
        <form onSubmit={handleSubmitForm} className="grid grid-cols-6 w-full md:max-w-[1300px] gap-x-10 gap-y-5 mt-4 mb-16 mx-auto">
          <div className="col-span-full flex flex-col gap-2">
            <label>Enter Property Name</label>
            <input
            onChange={(e) => setPropertyName(e.target.value)}
              className="border rounded-lg px-4 py-3 outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col col-span-full gap-2">
            <label>Enter Description</label>
            <textarea
            onChange={(e) => setPropertyDescription(e.target.value)}
              className="border rounded-lg px-4 py-3 outline-none resize-none"
              placeholder="Write description"
            />
          </div>
          <div className="flex flex-col col-span-full sm:col-span-4 gap-2">
            <label>Select Property Type</label>
            <select
              className="border rounded-lg px-2 py-3 outline-none "
              onChange={e => setPropertyType(e.target.value)}
            >
              <option value="residential">Residential properties</option>
              <option value="commercial">Commercial properties</option>
              <option value="industrial">Industrial properties</option>
              <option value="mixed-use">Mixed-use properties</option>
              <option value="vacant">Vacant land</option>
              <option value="special-purpose">
                Special-purpose properties
              </option>
            </select>
          </div>
          <div className="flex flex-col col-span-full sm:col-span-2 gap-2">
            <label>Enter Property price</label>
            <input
            onChange={e => setPropertyPrice(e.target.value)}
              className="border rounded-lg px-4 py-3 outline-none"
              type="number"
            />
          </div>
          <div className="flex flex-col gap-2 col-span-full">
            <label>Enter Location</label>
            <input
            onChange={e => setPropertyLocation(e.target.value)}
              className="border rounded-lg px-4 py-3 outline-none"
              type="text"
            />
          </div>
          <div className="col-span-full flex flex-col gap-2">
            <div>Property Photo</div>
            <div className="flex flex-col col-span-full border rounded-lg py-5 hover:bg-[#00000020]">
              <label
                className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer"
              >
                <div className="bg-secondary w-[40px] h-[40px] rounded-full grid place-items-center">
                  <img src="/dropzone.svg" alt="" />
                </div>

                <div>Click to upload or drag and drop</div>
                <div>SVG, PNG, JPG or GIF (max, 800x400px)</div>
                <input onChange={e => setPropertyPhoto(e.target.value)} className="" type="file" />
              </label>
            </div>
            <button
              className="bg-primary text-white py-2 px-6 rounded-lg self-start mt-5"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
