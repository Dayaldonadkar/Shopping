import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrowsingHistory from "./Components/BrowsingHistory";
import Details from "./Components/Details";
import EmptyCart from "./Components/EmptyCart";
import Home from "./Components/Home";
import Orders from "./Components/Orders";
import ProductDetails from "./Components/ProductDetails";
import Related from "./Components/Related";
import RelatedImages from "./Components/RelatedImages";
import Reviews from "./Components/Reviews";
import Track from "./Components/Track";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empty" element={<EmptyCart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/track" element={<Track />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
