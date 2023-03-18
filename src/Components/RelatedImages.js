import React, { Component } from "react";

export default class RelatedImages extends Component {
  render() {
    return (
      <div className="flex justify-center">
        <div className="w-11/12">
          <h1 className="text-3xl font-medium py-10">
            Images realted to this product
          </h1>
          <div className="grid grid-cols-3 justify-center space-x-2">
            <img src="Related1.png" alt="" />
            <img src="Related2.png" alt="" />
            <img src="Related3.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
