import { useEffect, useState } from "react";
import { FETCH1_URL } from "../utils/constants";

const useRestMenu = (resid) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH1_URL + resid);
    const json = await data.json();
    setresInfo(json.data);
  };

  return resInfo;
};

export default useRestMenu;
