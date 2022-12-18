import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { listFurnitures } from "../../../redux/actions/furnitureActions";

import {
  FurnitureListStyles,
  FurnitureCard,
  FurnitureImg,
  FurnitureText,
  FurnitureNamePrice,
} from "./List.styles";

import Loading from "../../loading/Loading.component";
import Message from "../../message/Message.component";
import Rating from "../../rating/Rating.component";

function FurnitureList() {
  const dispatch = useDispatch();
  const { loading, furnitures, error } = useSelector(
    (state) => state.furnitureList
  );
  console.log(furnitures);

  useEffect(() => {
    dispatch(listFurnitures());
  }, [dispatch]);

  return (
    <FurnitureListStyles>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <>
          {furnitures.map((furniture) => (
            <FurnitureCard key={furniture._id}>
              <Link to={`/shop/furniture/${furniture._id}`}>
                <FurnitureImg src={furniture.image} alt={furniture.name} />
                <FurnitureText>
                  <FurnitureNamePrice>{furniture.name}</FurnitureNamePrice>
                  <FurnitureNamePrice price>
                    ${furniture.price}
                  </FurnitureNamePrice>
                </FurnitureText>
                <Rating rating={furniture.rating} margin />
              </Link>
            </FurnitureCard>
          ))}
        </>
      )}
    </FurnitureListStyles>
  );
}

export default FurnitureList;
