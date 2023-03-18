import React, { Component } from "react";
import BrowsingHistory from "./BrowsingHistory";
import Details from "./Details";
import ProductDetails from "./ProductDetails";
import Related from "./Related";
import RelatedImages from "./RelatedImages";
import Reviews from "./Reviews";

export default class Home extends Component {
  render() {
    return (
      <div>
        <ProductDetails />
        <Related />
        <Details />
        <RelatedImages />
        <BrowsingHistory />
        <Reviews />
      </div>
    );
  }
}
