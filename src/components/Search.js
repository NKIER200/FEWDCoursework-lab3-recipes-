import React, { useState, useEffect } from "react";
import DisplayFoodItems from "./DisplayFoodItems";
import DisplayMenuAndItem from "./DisplayMenu&List";
import DisplayItemz from "./DisplayItem";
import "../index.css";
function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  const [filterOil, setFilterOil] = useState(false);
  const [filterFlour, setFilterFlour] = useState(false);
  const [filterButter, setFilterButter] = useState(false);
  const [displayData, setDisplayData] = useState("");
  const [displayMenu, setDisplayMenu] = useState([]);
  const [displayItem, setDisplayItem] = useState([]);

  const filtered = details.filter((entry) => {
    return entry.name.toLowerCase().includes(searchField.toLowerCase()) || (entry.category.toLowerCase().includes(searchField.toLowerCase())) || (entry.price.toLowerCase().includes(searchField.toLowerCase()));
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
  const butterData = (data) => {
    return data.filter((entry) => {
      return entry.ingredients.some((item) => { return item.ingredientName.includes("butter") })
    })

  }
  useEffect(() => {
    //so close but yet so far
    if (!filterOil && !filterFlour && !filterButter) {
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
      if (filterButter) {
        result = butterData(result)
      }
      setDisplayData(result)
    }
  }, [filtered, filterOil, filterFlour, filterButter])
  return (

    <div>
      <div> <input
        className="form-control"
        type="text"
        placeholder="Search ..."
        onChange={(e) => setSearchField(e.target.value)}
      /> </div>
      <div className="oilCheck"> <label> Oil </label> <input type="checkbox" value={filterOil} onClick={() => setFilterOil(!filterOil)}

      /></div>
      <div className="oilCheck"> <label> Flour </label> <input type="checkbox" value={filterFlour} onClick={() => setFilterFlour(!filterFlour)}

      /></div>

      <div className="oilCheck"> <label> Butter </label> <input type="checkbox" value={filterButter} onClick={() => setFilterButter(!filterButter)}

      /></div>

      <div id="displayThis">

        {displayData && <div className="displayItemnuts">Recipes <DisplayFoodItems foodList={displayData} menu={displayMenu} setDisplayMenu={setDisplayMenu} item={displayItem} setDisplayItem={setDisplayItem} /></div>}
        {displayMenu.length > 0 && <div className="displayItemnuts"> Menu <DisplayMenuAndItem foodList={displayMenu} /></div>}
        {displayItem.length > 0 && <div className="displayItemnuts"> Ingredients List <DisplayItemz foodList={displayItem} /></div>}
      </div>
    </div>

  );

}
export default Search;