import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsNav from "../../navigation/details/DetailsNav.component";
import Purchase from "./purchase/Purchase.component";
import Description from "./description/Description.component";
import Related from "./related/Related.component";
import List from "../list/List.component";
import View from "./view/View.component";
import axios from "axios";
import API from "../../../api/api";

function Details() {
  const { furnitureId } = useParams();
  const [furniture, setFurniture] = useState([]);

  useEffect(() => {
    async function fetchFurniture() {
      const { data } = await axios.get(API.furniture.details(furnitureId));
      setFurniture(data);
    }
    fetchFurniture();
  }, [furnitureId]);

  return (
    <>
      <DetailsNav home="Home" shop="Shop" furniture={furniture} />
      <Purchase furniture={furniture} />
      <Description furniture={furniture} />
      <Related />
      <List />
      <View />
    </>
  );
}

export default Details;
