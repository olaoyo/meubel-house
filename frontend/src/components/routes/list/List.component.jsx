import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import API from "../../../api/api";

import {
  FurnitureListStyles,
  FurnitureCard,
  FurnitureImg,
  FurnitureText,
  FurnitureNamePrice,
} from "./List.styles";
import Rating from "../../rating/Rating.component";

function FurnitureList() {
  const [furnitures, setFurnitures] = useState([])

  useEffect(() => {
    async function fetchFurnitures() {
      const { data } = await axios.get(API.furniture.shop)
      setFurnitures(data)
    }
    fetchFurnitures()
  }, [])

  return (
    <FurnitureListStyles>
      {furnitures.map((furniture) => (
        <FurnitureCard key={furniture.id}>
          <Link to={`/shop/furniture/${furniture.id}`}>
              <FurnitureImg src={furniture.image} alt={furniture.name} />
              <FurnitureText>
                <FurnitureNamePrice>{furniture.name}</FurnitureNamePrice>
                <FurnitureNamePrice price>${furniture.price}</FurnitureNamePrice>
              </FurnitureText>
              <Rating rating={furniture.rating} margin />
          </Link>
        </FurnitureCard>
      ))}
    </FurnitureListStyles>
  );
}

export default FurnitureList;
