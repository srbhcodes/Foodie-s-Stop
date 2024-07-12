import RestCard from "./restcard";
import { useState, useEffect } from "react";
// import ResObj from "../utils/mockdata";
import { FETCH_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./shimmer";
const Body = () => {
  //   const [listState, setListState] = useState(ResObj);

  const [listState, setListState] = useState([]); //for our main list of the data
  const [searchText, setsearchText] = useState([]); //for the search text updation
  const [filterList, setfilterList] = useState([]); //the list which be getting cycled through in the screeen

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH_URL);
    const json = await data.json();

    setListState(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants //optional chaining
    );

    setfilterList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants //optional chaining
    );
    //console.log("test", json);
    //json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    //);
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Loading</h1>;
  console.log("test", onlineStatus);
  // constional rendering
  if (listState.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filterRes = listState.filter(
                (res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase()) //for the searchText its lowercase and also for the data
              );
              setfilterList(filterRes);
            }}
          >
            Search
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              const filterList = listState.filter(
                (res) => res.info.avgRating > 4.5
              );
              setfilterList(filterList);
            }}
          >
            Top Rated Res
          </button>
        </div>
      </div>
      <div className="res-container">
        {filterList.map((Restaurant) => (
          <Link
            key={Restaurant.info.id}
            to={"/restaurants/" + Restaurant.info.id}
          >
            <RestCard resData={Restaurant.info} />
          </Link>
        ))}
      </div>
      {/* <RestCard resData={ResObj[1]} />
          <RestCard resData={ResObj[0]} /> */}
    </div>
  );
};

export default Body;
