import React, { Component } from "react";

export default class ProductDetails extends Component {
  render() {
    return (
      <div className="flex flex-col lg:flex-row justify-center pt-10 font-Pt-Sans bg-gradient-to-l from-[#F8D2FF] from-w to-white px-5">
        <div className="flex flex-col justify-center lg:w-11/12">
          <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-4 xl:space-x-16">
            <div>
              <div className="flex flex-col sm:flex-row  sm:space-x-4 md:space-x-16 lg:space-x-4 xl:space-x-16  border-b-2 border-[#ABABAB] mb-1  pb-3">
                <div>
                  <img src="Mainpic.png" alt="" />
                </div>
                <div className="flex items-center space-x-3 sm:flex-col justify-between">
                  <img src="Dress1.png" alt="" />
                  <img src="Dress3.png" alt="" />
                  <img src="Dress2.png" alt="" />
                  <div className="invisible sm:visible space-y-5">
                    <img src="Dress.png" alt="" />
                    <img src="Main.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="invisible sm:visible">
                <h1 className="text-2xl font-bold pt-2">Product Description</h1>
                <div className="text-[#697475]">
                  <div className="grid grid-cols-2">
                    <p>Brand</p>
                    <p>Asus</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Model Name</p>
                    <p>Rog Zephyrus Duo 16</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Screen Size</p>
                    <p>16 inches</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Colour</p>
                    <p>Black</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>CPU</p>
                    <p>Intel i7</p>
                  </div>
                  <p className="underline font-bold">See more</p>
                </div>
              </div>

              <div className="pt-2">
                <h1 className="text-2xl font-bold">About this item</h1>
                <ul className="px-5 list-disc text-[#697475]">
                  <li>Processor: AMD Ryzen 9 6900HX Mobile Processor.</li>
                  <li>
                    Play over 100 high-quality PC games, plus new and upcoming
                    blockbusters.
                  </li>
                  <li>
                    With new games added all the time, there’s always something
                    new to play.
                  </li>
                  <li>
                    Graphics: NVIDIA GeForce RTX 3080 Ti GPU GDDR6 16GB VRAM
                    with Optimus. Show More
                  </li>
                  <li>
                    Memory: 32GB (16GB SO-DIMM *2) DDR5 4800MHz Support up to
                    64GB.
                  </li>
                </ul>
                <p className="text-[#697475] font-bold">Show More</p>
              </div>
            </div>

            <div className="lg:w-6/12">
              <h1 className="uppercase font-bold">Floral Print Dress</h1>
              <p className="text-[#059CA6]">Visit Asus Store</p>
              <div className="flex justify-between">
                <p>★★★★★</p>
                <div className="space-x-2">
                  <label htmlFor="Quantity">Quantity</label>
                  <select
                    className="px-3 py-1 text-xs border border-black"
                    name="Quantity"
                    id="num"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
              <div className="space-x-3 border-y border-[#ABABAB] my-5 flex items-center">
                <strong className="text-2xl">Rs 56.000</strong>
                <span className="text-sm text-[#34C687]">-16%</span>
                <span className="text-sm text-[#D04815] font-medium line-through">
                  M.R.P:60000
                </span>
              </div>
              <div className="text-[#697475] text-sm">
                <div className="flex justify-between items-center">
                  <p className="text-[#059CA6] text-xl">In stock</p>
                  <div className="flex space-x-1 items-center">
                    <input type="checkbox" id="gift"></input>
                    <label className="-mt-1" htmlFor="gift">
                      Add a gift box
                    </label>
                  </div>
                </div>
                <p>Sold by Appario Retail Private Ltd and Fulfilled</p>
                <p className="flex items-center py-1">
                  <img src="Location.png" alt="" />
                  Deliver to Jaskaran-Ludhiana, 141010
                </p>

                <div className="border-b text-sm pb-3 mb-4">
                  <h1 className="text-black font-bold py-2">
                    Add a protection Plan:
                  </h1>
                  <div className="space-y-1">
                    <div className="flex items-start space-x-1">
                      <input type="checkbox" id="year" />
                      <label className="-mt-1" htmlFor="year">
                        1 year Extended Warranty for Rs.8349.00
                      </label>
                    </div>
                    <div className="flex items-start space-x-1">
                      <input type="checkbox" id="warranty" />
                      <label className="-mt-1" htmlFor="warranty">
                        ASUS Branded 1 Year Accidental Damage Protection with
                        Onsite Service for ₹2,499.00
                      </label>
                    </div>
                    <div className="flex items-start space-x-1">
                      <input type="checkbox" id="extended" />
                      <label className="-mt-1" htmlFor="extended">
                        Quess Care Extended Warranty Plan for 2 Year for Laptop
                        Between 375001 to 400000 (Email Delivery) for ₹23,499.00
                      </label>
                    </div>
                  </div>
                </div>
                <div className="py-1">
                  <h1 className="text-2xl text-black">Size</h1>
                  <div className="flex space-x-5 text-xl py-1">
                    <div className="border border-black py-2 px-4 rounded-full">
                      <p>S</p>
                    </div>
                    <div className="border border-black rounded-full px-4 py-2">
                      <p>M</p>
                    </div>
                    <div className="border border-black rounded-full px-4 py-2">
                      <p>L</p>
                    </div>

                    <p className="border border-black rounded-full px-3 py-2">
                      XL
                    </p>
                  </div>
                </div>

                <div>
                  <h1 className="text-2xl text-black">Colour</h1>
                  <div className="flex space-x-5 py-2">
                    <p className="bg-[#DDCBB3] h-11 w-11 rounded-full border border-black"></p>
                    <p className="bg-black h-11 w-11 rounded-full border border-black"></p>
                    <p className="bg-[#67340A] h-11 w-11 rounded-full border border-black"></p>
                    <p className="bg-[#A2C6F5] h-11 w-11 rounded-full border border-black"></p>
                    <p className="bg-white h-11 w-11 rounded-full border border-black"></p>
                  </div>
                </div>

                <div className="flex space-x-5 pt-5 border-b border-[#ABABAB] pb-5">
                  <button className="bg-[#407BF9] text-white px-12 py-2 rounded-2xl">
                    Add to Cart
                  </button>
                  <button className="bg-gradient-to-t from-[#AE4EF3] to-[#D465F4] text-white px-12 py-2 rounded-2xl">
                    Buy Now
                  </button>
                </div>
                <div className="border-b border-[#ABABAB] flex justify-center px-1">
                  <div className="bg-white flex justify-around py-3 my-5 sm:w-11/12 border border-[#ABABAB] rounded-lg">
                    <div className="flex flex-col items-center border-r border-[#ABABAB] px-5 sm:px-12 lg:px-8">
                      <img src="Free.png" alt="" />
                      <p>Free</p>
                      <p>Delivery</p>
                    </div>
                    <div className="flex flex-col items-center border-r border-[#ABABAB] px-5 sm:px-7">
                      <img src="Replace.png" alt="" />
                      <p>7 days</p>
                      <p>Return</p>
                    </div>
                    <div className="flex flex-col items-center border-r border-[#ABABAB] px-5 sm:px-6">
                      <img src="Truck.png" alt="" />
                      <p>Amazon</p>
                      <p>Deliverd</p>
                    </div>
                    <div className="flex flex-col items-center px-5 sm:px-12 lg:px-8">
                      <img src="Warranty.png" alt="" />
                      <p>1 year</p>
                      <p>Warranty</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="border border-[#ABABAB] sm:w-11/12 mt-3 py-2 bg-white rounded-lg">
                    <h1 className="px-1 text-black">Other Sellers</h1>
                    <div className="flex md:justify-between ">
                      <div className="border-r border-[#ABABAB] sm:w-4/12 px-2 pr-3  ">
                        <p>3,96,990.00</p>

                        <p>Fulfilled FREE Delivery Details Sold by: Scion-Ex</p>
                      </div>
                      <div className="border-r border-[#ABABAB] sm:w-4/12 px-4">
                        <p>3,96,990.00</p>
                        <p>Fulfilled FREE Delivery Details Sold by: Scion-Ex</p>
                      </div>
                      <div className="sm:w-4/12 px-4">
                        <p>3,96,990.00</p>
                        <p>Fulfilled FREE Delivery Details Sold by: Scion-Ex</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
