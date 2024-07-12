import { RES } from "../utils/constants";

const RestCard = (props) => {
  // RestCard.js
  // Change resData to resName
  const { resData } = props;

  return (
    <div className="res-card">
      <img className="res-logo" src={RES + resData.cloudinaryImageId} />
      <h4>{resData.name}</h4>
      <h5>{resData.avgRating}</h5>
      <h5>{resData.areaName}</h5>
      <h5>{resData.locality}</h5>
    </div>
  );
};

export default RestCard;
