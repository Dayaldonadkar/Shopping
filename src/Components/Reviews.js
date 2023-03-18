import React, { Component } from "react";
import ReviewName from "./ReviewName";

export default class Reviews extends Component {
  render() {
    return (
      <div className="lg:pl-10 px-5 py-5 grid lg:grid-cols-2 md:flex md:space-x-20">
        <div className="lg:w-6/12 w-3/4 space-y-4 md:w-1/2">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold">Customer Reviews</h1>
            <div className="flex space-x-2">
              <img src="Star.png" alt="" />
              <img src="Star.png" alt="" />
              <img src="Star.png" alt="" />
              <img src="Star.png" alt="" />
              <img src="Star.png" alt="" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex space-x-12 ">
              <div className="flex space-x-5">
                <p>5 Star</p>
                <p className="w-56 h-7 bg-[#FFBC2D] rounded-full"></p>
              </div>
              <p>100%</p>
            </div>
            <div className="flex space-x-28">
              <div className="flex space-x-5">
                <p>4 Star</p>
                <div className="relative">
                  <p className="w-40 h-7 bg-[#FFBC2D] rounded-full "></p>
                  <p className="w-40 h-7 bg-[#D9D9D9] rounded-r-full absolute -right-16 top-0 -z-10"></p>
                </div>
              </div>
              <p>100%</p>
            </div>

            <div className="flex space-x-36">
              <div className="flex space-x-5">
                <p>3 Star</p>
                <div className="relative">
                  <p className="w-32 h-7 bg-[#FFBC2D] rounded-full "></p>
                  <p className="w-48 h-7 bg-[#D9D9D9] rounded-r-full absolute -right-24 top-0 -z-10"></p>
                </div>
              </div>
              <p>100%</p>
            </div>

            <div className="flex space-x-48">
              <div className="flex space-x-5">
                <p>2 Star</p>
                <div className="relative">
                  <p className="w-20 h-7 bg-[#FFBC2D] rounded-full "></p>
                  <p className="w-48 h-7 bg-[#D9D9D9] rounded-r-full absolute -right-36 top-0 -z-10"></p>
                </div>
              </div>
              <p>100%</p>
            </div>

            <div className="flex space-x-56 border-b-2 border-[#ABABAB] pb-6">
              <div className="flex space-x-5">
                <p>2 Star</p>
                <div className="relative">
                  <p className="w-12 h-7 bg-[#FFBC2D] rounded-full "></p>
                  <p className="w-52 h-7 bg-[#D9D9D9] rounded-r-full absolute -right-44 top-0 -z-10"></p>
                </div>
              </div>
              <p>100%</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4 pb-10">
            <h1 className="lg:text-5xl text-lg font-bold">
              Review this product
            </h1>
            <p className="text-[#697475]">
              Share your thoughts with other customers
            </p>

            <button className="bg-[#FFBC2D] text-white py-3 font-bold">
              Write a review
            </button>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="space-y-5">
            <h1 className="text-4xl font-bold pt-1">Customer Reviews</h1>
            <ReviewName
              name="Arman Rokni"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <ReviewName
              name="Arman Rokni"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <ReviewName
              name="Arman Rokni"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <ReviewName
              name="Arman Rokni"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <ReviewName
              name="Arman Rokni"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </div>
        </div>
      </div>
    );
  }
}
