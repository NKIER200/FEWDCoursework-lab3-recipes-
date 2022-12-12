import React from "react";
import Search from "./Search"
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css"
import { items } from "../data/data";
function Menupage() {
  return (
    <div className="containmynuts">
      <h1>Menu</h1>
      <Search details={items}/>
      </div>
); }
export default Menupage;