import React, { Component } from "react";
import BrowsingHistory from "./BrowsingHistory";
import NewArrival from "./NewArrival";

export default class EmptyCart extends Component {
  render() {
    return (
      <div>
        <div className="flex justify-center py-10">
          <div className="w-10/12 sm:w-9/12 space-y-4">
            <div className="sm:pl-12 px-5 py-10 bg-[#F7F7F7]">
              <h1 className="text-4xl">Your Cart is empty.</h1>
              <p className="py-4 lg:w-9/12">
                Your shopping cart is waiting. Give it purpose – fill it with
                groceries, clothing, household supplies, electronics and more.
                Continue shopping on the Amazon.in homepage, learn about today's
                deals, or visit your Wish List.
              </p>
            </div>

            <div className="bg-[#F7F7F7] px-5 sm:px-12 py-10">
              <h1 className="text-4xl pb-10">Your Items</h1>
              <div className="flex justify-between sm:justify-start sm:space-x-10 border-b border-[E1E3E3] pl-2 sm:pl-5">
                <button className="focus:border-b-2 border-black pb-1">
                  No items saved for Later
                </button>
                <button className="focus:border-b-2 border-black pb-1">
                  Buy it gain
                </button>
              </div>
            </div>

            <div className="text-sm">
              The price and availability of items at Amazon.in are subject to
              change. The shopping cart is a temporary place to store a list of
              your items and reflects each item's most recent price. Do you have
              a promotional code? We'll ask you to enter your claim code when
              it's time to pay.
            </div>
          </div>
        </div>
        <div className="10">
          <NewArrival />
          <BrowsingHistory />
        </div>
      </div>
    );
  }
}
