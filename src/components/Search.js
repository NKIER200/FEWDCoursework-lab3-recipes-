import React, { useState, useEffect } from "react";
import DisplayFoodItems from "./DisplayFoodItems";
import DisplayMenuAndItem from "./DisplayMenu&List";
import DisplayItemz from "./DisplayItem";
import "../index.css";
function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  const [filterOil, setFilterOil] = useState(false);
  const [filterFlour, setFilterFlour] = useState(false);
  const [filterDairy, setFilterDairy] = useState(false);
  const [filterVege, setFilterVege] = useState(false);
  const [displayData, setDisplayData] = useState("");
  const [displayMenu, setDisplayMenu] = useState([]);
  const [displayItem, setDisplayItem] = useState([]);

  const filtered = details.filter((entry) => {
    return  entry.name.toLowerCase().includes(searchField.toLowerCase()) || (entry.category.toLowerCase().includes(searchField.toLowerCase())) || (entry.price.toLowerCase().includes(searchField.toLowerCase()));
  });
 
   
  const oilData = (data) => {
    return data.filter((entry) => {
      return entry.ingredients.some((item) => { return item.ingredientName.includes("olive oil") })
    })

  }
  const flourData = (data) => {
    return data.filter((entry) => {
      return entry.ingredients.some((item) => { return item.ingredientName.includes("flour") })
    })

  }
  const dairyData = (data) => {
    return data.filter((entry) => {
      return entry.ingredients.some((item) => { return item.type.includes("dairy") })
    })

  }
  const vegeData = (data) => {
    return data.filter((entry) => {
      return entry.category.includes(("vegetarian") )
    })
  }
  
  useEffect(() => {
    //so close but yet so far
    if (!filterOil && !filterFlour && !filterDairy && !filterVege) {
      setDisplayData(filtered)

    }
    else {
      let result = filtered
      if (filterFlour) {
        result = flourData(result)
      }
      if (filterOil) {
        result = oilData(result)
      }
      if (filterDairy) {
        result = dairyData(result)
      }
      if (filterVege) {
        result = vegeData(result)
      }
      setDisplayData(result)
    }
  }, [filtered, filterOil, filterFlour, filterDairy, filterVege])
  return (

    <div>
      <div> <input
        className="form-control"
        type="text"
        placeholder="Search ..."
        onChange={(e) => setSearchField(e.target.value)}
      /> </div>
     <p className = "filterP">Filter by Allergens</p> 
      <div className="oilCheck"> <label> Oil </label> <input type="checkbox" value={filterOil} onClick={() => setFilterOil(!filterOil)}

      /></div>
      <div className="oilCheck"> <label> Flour </label> <input type="checkbox" value={filterFlour} onClick={() => setFilterFlour(!filterFlour)}

      /></div>
      <div className="oilCheck"> <label> Vegetarian </label> <input type="checkbox" value={filterVege} onClick={() => setFilterVege(!filterVege)}

/></div>

       <div className="oilCheck"> <label> Dairy </label> <input type="checkbox" value={filterDairy} onClick={() => setFilterDairy(!filterDairy)}

/></div>

      <div id="displayThis">

        {displayData && <div className="displayItemx">Recipes <DisplayFoodItems foodList={displayData} menu={displayMenu} setDisplayMenu={setDisplayMenu} item={displayItem} setDisplayItem={setDisplayItem} /></div>}
        {displayMenu.length > 0 && <div className="displayItemx"> Menu <DisplayMenuAndItem foodList={displayMenu} /></div>}
        {displayItem.length > 0 && <div className="displayItemx"> Ingredients List <DisplayItemz foodList={displayItem} /></div>}
      </div>
    </div>

  );

}
export default Search;