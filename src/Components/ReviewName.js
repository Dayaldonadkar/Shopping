import React, { Component } from "react";

export default class ReviewName extends Component {
  render() {
    return (
      <div>
        <div className="space-y-3">
          <div className="flex items-center space-x-20">
            <div className="flex items-center space-x-3">
              <img src="frame8.png" alt="" />
              <h1 className="font-medium space-x-1">
                {this.props.name}
                <span className="text-xs text-[#697475]">1 day ago</span>
              </h1>
            </div>
            <div className="flex">
              <img src="Star.png" alt="" />
              <img src="Star.png" alt="" />
              <img src="Star.png" alt="" />
              <img src="Star.png" alt="" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="lg:w-9/12 text-sm text-[#697475]">
              {this.props.review}
            </p>
            <p>See More...</p>
          </div>
          <div className="flex items-center space-x-5">
            <button className="bg-[#C65DF3] text-white font-bold px-10 py-3 rounded-lg">
              Helpful
            </button>
            <p className="text-[#697475]">| Report abuse</p>
          </div>
        </div>
      </div>
    );
  }
}
