import React, { useState } from "react"
import { useMainContext } from "../../../contexts/MainContext"

export default function AddProperty() {
  const [propertyName, setPropertyName] = useState("")
  const [propertyDescription, setPropertyDescription] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [propertyStatus, setPropertyStatus] = useState("")
  const [propertyCountry, setPropertyCountry] = useState("")
  const [propertyPrice, setPropertyPrice] = useState("")
  const [propertyLocation, setPropertyLocation] = useState("")
  const [propertyPhoto, setPropertyPhoto] = useState({ name: '', url: '' })

  const { userData } = useMainContext()

  const handleImageChange = (file: File) => {
    const reader = (readFile: File) =>
      new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.onload = () => resolve(fileReader.result as string)
        fileReader.readAsDataURL(readFile)
      })

    reader(file).then((result: string) =>
      setPropertyPhoto({ name: file?.name, url: result })
    )
  }

  async function handleSubmitForm(e: React.SyntheticEvent) {
    e.preventDefault()

    try {
      const body = {
        propertyName,
        propertyDescription,
        propertyType,
        propertyPrice,
        propertyLocation,
        propertyPhoto: propertyPhoto.url,
        userData,
        propertyCountry,
        propertyStatus
      }
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/properties`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      )
      console.log(await response.json())
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="p-5">
      <div className="text-3xl font-bold mb-5">Add Property</div>
      <div className="bg-white rounded-2xl p-5 w-full">
        <form
          onSubmit={handleSubmitForm}
          className="grid grid-cols-6 w-full md:max-w-[1300px] gap-x-10 gap-y-5 mt-4 mb-16 mx-auto"
        >
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
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="apartments">Apartments</option>
              <option value="houses">Houses</option>
              <option value="commercial">Commercial</option>
              <option value="garages">Garages</option>
              <option value="lots">Lots</option>
            </select>
          </div>
          <div className="flex flex-col col-span-full sm:col-span-2 gap-2">
            <label>Enter Property price</label>
            <input
              onChange={(e) => setPropertyPrice(e.target.value)}
              className="border rounded-lg px-4 py-3 outline-none"
              type="number"
            />
          </div>
          <div className="flex flex-col gap-2 col-span-full">
            <label>Enter Location</label>
            <input
              onChange={(e) => setPropertyLocation(e.target.value)}
              className="border rounded-lg px-4 py-3 outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col col-span-full sm:col-span-2 gap-2">
            <label>Select Property Status</label>
            <select
              className="border rounded-lg px-2 py-3 outline-none "
              onChange={(e) => setPropertyStatus(e.target.value)}
            >
              <option value="">Select Status</option>
              <option value="for-sale">For Sale</option>
              <option value="for-rent">For Rent</option>
            </select>
          </div>
          <div className="flex flex-col col-span-full sm:col-span-4 gap-2">
            <label>Select Country</label>
            <select
              className="border rounded-lg px-2 py-3 outline-none "
              onChange={(e) => setPropertyCountry(e.target.value)}
            >
              <option value="">Select Country</option>
              <option value="philippines">Philippines</option>
              <option value="america">America</option>
            </select>
          </div>
          <div className="col-span-full flex flex-col gap-2">
            <div>Property Photo</div>
            <div className="flex flex-col col-span-full border rounded-lg py-5 hover:bg-[#00000020]">
              <label className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer">
                <div className="bg-secondary w-[40px] h-[40px] rounded-full grid place-items-center">
                  <img src="/dropzone.svg" alt="" />
                </div>

                <div>Click to upload or drag and drop</div>
                <div>SVG, PNG, JPG or GIF (max, 800x400px)</div>
                <div className="text-primary">{propertyPhoto.name}</div>
                <input
                  onChange={(e) => handleImageChange(e.target.files![0])}
                  className="hidden"
                  type="file"
                />
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
