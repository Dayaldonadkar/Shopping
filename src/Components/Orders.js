import React, { Component } from "react";
import BrowsingHistory from "./BrowsingHistory";
import NewArrival from "./NewArrival";

export default class Orders extends Component {
  render() {
    return (
      <div>
        <div className="flex justify-center py-10">
          <div className="md:w-9/12 space-y-4 px-2">
            <div className="md:px-12 md:py-10">
              <h1 className="text-4xl pb-10 font-medium">Your Orders</h1>
              <div className="flex space-x-10 border-b border-[E1E3E3] pl-5">
                <button className="focus:border-b-4 border-black pb-1  pr-2">
                  Orders
                </button>
                <button className="focus:border-b-2 border-black pb-1 pr-2">
                  Buy Again
                </button>
                <button className="focus:border-b-2 border-black pb-1 pr-2">
                  Not yet Shipped
                </button>
                <button className="focus:border-b-2 border-black pb-1 pr-2">
                  Cancelled Orders
                </button>
              </div>

              <div className="flex pt-10">
                <img className="" src="Door.png" />
                <div className="flex flex-col justify-between py-2 px-10 h-20 space-y-3">
                  <div>
                    <p className="text-black lg:text-xl font-medium">
                      Samsung Refrigarator.
                    </p>

                    <h1 className="text-xs text-[#697475]">
                      Bin Bakar Electronics
                    </h1>
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-sm lg:text-xl">RS.56000</strong>
                    <small className="line-through text-xs lg:text-base">
                      RS 60.000
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <NewArrival />
          <BrowsingHistory />
        </div>
      </div>
    );
  }
}
