import React from "react"

export default function PropertyDetails() {
  return (
    <div>
      <div className="flex gap-5">
        <img className="w-[10px]" src="/chevron-left.svg" alt="" />
        <div className="text-2xl font-semibold">Details</div>
      </div>

      <div className="grid grid-cols-12 gap-5">
        <img className="col-span-6 w-full" src="/random.jpg" alt="" />
        <div className="col-span-2 flex flex-col gap-5">
          <img className="row-span-1" src="/random.jpg" alt="" />
          <img src="/random.jpg" alt="" />
        </div>
        <div className="col-span-4 border p-5">
          <img className="ml-auto" src="/three-dot-horizontal-icon.svg" alt="" />
          <img className="w-[100px] mx-auto" src="/profile-01.png" alt="" />
          <div className="font-bold text-center">Hussain Ahmed</div>
          <div className="text-center">Agent</div>
          <div className="flex gap-5 justify-center">
            <img src="/location-icon.svg" alt="" />
            <div>North Carolina, USA</div>
          </div>
          <div className="font-bold text-center">10 Properties</div>
          <div className="flex gap-5 justify-center">
            <button className="flex p-2 gap-2 bg-primary items-center text-white rounded-lg">
              <img className="text-w" src="/message.svg" alt="" />
              <div>Message</div>
            </button>
            <button className="flex p-2 gap-2 bg-green-500 items-center text-white rounded-lg">
              <img src="/phone-icon.svg" alt="" />
              <div>Call</div>
            </button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div>
            <div>Apartment</div>
            <div>
              <div>star</div>
              <div>star</div>
              <div>star</div>
              <div>star</div>
              <div>star</div>
            </div>
          </div>
          <div>
            <div>Star Sun Hotel & Apartment</div>
            <div>Price</div>
          </div>
          <div>
            <div>
              <div>icon</div>
              <div>North Carolina, USA</div>
            </div>
            <div>
              <span>$80</span> For One Day
            </div>
          </div>
          <div>Facility</div>
          <div>
            <div>
              <div>icon</div>
              <div>4 Beds</div>
            </div>
            <div>
              <div>icon</div>
              <div>Baths</div>
            </div>
            <div>
              <div>icon</div>
              <div>28M Area</div>
            </div>
            <div>
              <div>icon</div>
              <div>Smoking Area</div>
            </div>
          </div>
          <div>
            <div>
              <div>icon</div>
              <div>Kitchen</div>
            </div>
            <div>
              <div>icon</div>
              <div>Balcony</div>
            </div>
            <div>
              <div>icon</div>
              <div>Wifi</div>
            </div>
            <div>
              <div>icon</div>
              <div>Parking Area</div>
            </div>
          </div>
          <div>Description</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            explicabo! Quidem non ad sunt officiis quo soluta, optio dolores
            debitis, architecto inventore suscipit assumenda officia quisquam.
            Reiciendis, nulla molestiae labore ullam non et repellat id ut
            voluptas commodi quas eius cupiditate facilis repudiandae, fugiat
            assumenda facere dignissimos necessitatibus tenetur beatae ducimus
            soluta incidunt recusandae. Deserunt labore saepe velit ea
            repellendus earum asperiores obcaecati non, eius beatae architecto
            est suscipit, incidunt odio esse molestias qui doloribus!
            Accusantium ratione quam ducimus consequatur deserunt a
            exercitationem, adipisci unde nobis dolore molestiae laborum
            corporis facilis, doloremque, autem amet assumenda atque aperiam
            expedita hic debitis?
          </div>
        </div>
        <div>
          <div>Map here</div>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  )
}
