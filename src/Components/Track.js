import React, { Component } from "react";

export default class Track extends Component {
  render() {
    return (
      <div className="flex justify-center font-Pt-Sans px-7">
        <div className="lg:w-8/12 grid-rows-3">
          <h1 className="text-4xl font-bold">Tracking</h1>
          <p>Deselect all items</p>

          <div className="flex justify-end text-lg text-[#697475] invisible md:visible">
            Price
          </div>

          <div className="flex flex-col md:flex-row sm:justify-between ">
            <div className="flex sm:space-x-12">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8">
                <input className="invisible lg:visible" type="checkbox" />
                <img src="Smalldress.png" alt="" />
                <div className="md:w-7/12">
                  <div className="flex">
                    <input className="visible md:invisible" type="checkbox" />
                    <p className="text-xl sm:text-base">
                      ASUS ROG Zephyrus Duo 16 Dual Screen Laptop, 16" (40.64
                      cm) UHD+/FHD+ 120Hz/240Hz/3ms, AMD Ryzen 9 6900HX, 16GB
                      RTX 3080 Ti, Gaming Laptop (32GB/2TB SSD/Win
                      11/Office/Black/2.55 Kg), GX650RXZ-LB226WS
                    </p>
                  </div>
                  <p className="text-[#34C687] text-xl">In stock</p>
                  <p className="text-[#697475] text-lg">
                    Eligible for free shipping
                  </p>
                  <input type="checkbox" id="gift" />
                  <label className="text-[#697475] px-1" htmlFor="gift ">
                    This will be a gift
                  </label>
                  <p className="text-[#697475] ">
                    <span className="font-bold text-lg">Pattern Name:</span>
                    Laptop
                  </p>
                </div>
              </div>
            </div>
            <div className="space-x-2 text-xl flex">
              <p className="text-[#697475] text-xl md:invisible">Price:</p>
              <strong>Rs</strong>
              <strong>56.000</strong>
            </div>
          </div>

          <div className="py-8">
            <h1 className="text-4xl font-bold py-4">Track your Order</h1>
            <div className="text-[#697475]">
              <ul className="list-disc space-y-5 md:px-20 px-7">
                <li>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </li>
                <li>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </li>
                <li>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </li>
                <li>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#FDF2FF] space-y-5 py-5 lg:px-10">
            <h1 className="text-4xl font-bold">Shipment details</h1>
            <div className="space-y-4">
              <p className="font-semibold">free delivery on eligible orders</p>
              <div>
                <h2 className="font-semibold">Delivered</h2>
                <p className="text-[#00000080] font-bold">
                  Friday, 16 December, 2022
                </p>
              </div>
              <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
                  <img src="smallmage.png" alt="" />
                  <p className="flex md:w-8/12 sm:text-xl">
                    ASUS ROG Zephyrus Duo 16 Dual Screen Laptop, 16" (40.64 cm)
                    UHD+/FHD+ 120Hz/240Hz/3ms, AMD Ryzen 9 6900HX, 16GB RTX 3080
                    Ti, Gaming Laptop (32GB/2TB SSD/Win 11/Office/Black/2.55
                    Kg), GX650RXZ-LB226WS
                  </p>
                </div>
                <div className="space-x-2 text-2xl">
                  <strong>Rs</strong>
                  <strong>56.000</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
