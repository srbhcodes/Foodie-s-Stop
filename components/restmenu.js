import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";
import Shimmer from "./shimmer";

const Restmenu = () => {
  const { resid } = useParams();
  const resInfo = useRestMenu(resid);

  let name, cuisines, costForTwoMessage;
  if (
    resInfo &&
    resInfo.cards &&
    resInfo.cards[2] &&
    resInfo.cards[2].card &&
    resInfo.cards[2].card.card &&
    resInfo.cards[2].card.card.info
  ) {
    ({ name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info);
  }

  let itemCards;
  if (
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
      ?.itemCards
  ) {
    ({ itemCards } =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card);
  }
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="restmenu">
      {<h1>{name}</h1>}
      {<h2>{cuisines}</h2>}
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -Rs {item.card.info.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Restmenu;
