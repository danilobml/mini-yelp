import React, { useState, useEffect } from "react";
import data from "../data/data.json";
import Footer from "./Footer/Footer";
import Search from "./Search/Search";
import SmallCard from "./SmallCard/SmallCard";

//  import BarLoader from "react-spinners/BarLoader";
//import ClipLoader from "react-spinners/ClipLoader";

function Home() {
  const [restaurants, setRestaurants] = useState(data);
  const [isError, setIsError] = useState(false);
  const [filter, setFilter] = useState("restaurant");
  const [userInput, setUserInput] = useState("");
  const [searchText, setSearchText] = useState("");
  const searchRestaurant = (nameRestaurant) => {
    //setRestaurant(idRestaurant);
  };

  /* /restaurants/id */
  //   useEffect(() => {
  //     const urlSearch = new URL("https://hn.algolia.com/api/v1/search_by_date");
  //     filter === "restaurant" && urlSearch.searchParams.set("restaurant", searchText);
  //     filter === "city" && urlSearch.searchParams.set("city", searchText);
  //     filter === "categories" && urlSearch.searchParams.set("tag", searchText);

  //     //console.log("Hello URL:"+ urlSearch);

  //     fetch(urlSearch)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error(`An error has occured while fetching the data. Status code: ${response.status}`);
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setRestaurants(data);
  //         //console.log(data)
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setIsError(true);
  //       });
  //   }, [restaurants]);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchText(userInput);
    setUserInput("");
    event.target.reset();
  };

  if (isError) {
    return (
      <div className="Home">
        <h1>Error loading page, please refresh your page and try again</h1>
      </div>
    );
  } else {
    return (
      <div className="Home">
        <img src="../images/home.jpg" />
        <Search handleSearch={handleSearch} handleFilter={handleFilter} handleUserInput={handleUserInput} />
        <SmallCard restaurant={restaurants[0]} />
        {/*  {restaurants && restaurants.filter((restaurant) => restaurant.id !== null).map((restaurant, index) => <SmallCard key={index} restaurant={restaurant} />)} */}

        <Footer />
      </div>
    );
  }
}

export default Home;
