import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  PurchaseStyles,
  ImgSmallGrid,
  ImgSmall,
  ImgBigGrid,
  ImgBig,
  DetailsGrid,
  DetailsHeader,
  Details,
  Reviews,
  RatingGrid,
  ReviewsButton,
  Description,
  SizeAndColorGrid,
  SizeAndColor,
  SizeBg,
  ColorBg,
  QtyAddToCart,
  Qty,
  AddRemove,
  Tags,
  Tag,
  SocialMedia,
  Social,
} from "./Purchase.styles";
import Rating from "../../../rating/Rating.component";
import { AddToCartButton } from "../../../buttons/Buttons";

import { addFurnitureToCart, increaseFurnitureQty, decreaseFurnitureQty } from "../../../../redux/actions/cartActions";

import Loading from "../../../loading/Loading.component";
import Message from "../../../message/Message.component";
import { APILink } from "../../../../api/api";

function Purchase({ loading, furniture, error, furnitureId }) {
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();

  // Get qty from redux state
  const { cartItems } = useSelector((state) => state.cart);
  const currentFurniture = cartItems.find((furniture) => furniture.id === +furnitureId) 
  // 

  const navigate = useNavigate();

  const addFurniture = () => {
    setAmount(amount + 1);
  };

  const removeFurniture = () => {
    setAmount(amount > 1 ? amount - 1 : amount);
  };

  const onChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const addToCartHandler = () => {
    dispatch(addFurnitureToCart(furnitureId, amount))
    navigate(APILink.cart);
    // navigate(APILink.addToCart(furnitureId, amount));
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <PurchaseStyles>
          <ImgSmallGrid>
            <ImgSmall src={furniture.image} alt={furniture.name} />
            <ImgSmall src={furniture.image} alt={furniture.name} />
            <ImgSmall src={furniture.image} alt={furniture.name} />
            <ImgSmall src={furniture.image} alt={furniture.name} />
          </ImgSmallGrid>
          <ImgBigGrid>
            <ImgBig src={furniture.image} alt={furniture.name} />
          </ImgBigGrid>
          <DetailsGrid>
            <DetailsHeader>{furniture.name}</DetailsHeader>
            <Details p1 grey>
              ${furniture.price}
            </Details>
            <Reviews>
              <RatingGrid>
                <Rating rating={furniture.rating} />
              </RatingGrid>
              <ReviewsButton>
                <Details p6 grey>
                  {furniture.numReviews} Customer Reviews
                </Details>
              </ReviewsButton>
            </Reviews>
            <Description>
              <Details p7>{furniture.description}</Details>
            </Description>
            <SizeAndColorGrid>
              <Details grey>Size</Details>
              <SizeAndColor>
                <SizeBg selected>
                  <Details>L</Details>
                </SizeBg>
                <SizeBg>
                  <Details>XL</Details>
                </SizeBg>
                <SizeBg>
                  <Details>XS</Details>
                </SizeBg>
              </SizeAndColor>
              <Details grey>Color</Details>
              <SizeAndColor>
                <ColorBg purple />
                <ColorBg black />
                <ColorBg gold />
              </SizeAndColor>
            </SizeAndColorGrid>
            <QtyAddToCart>
              <Qty>
                <AddRemove onClick={removeFurniture}>
                  <span className="material-symbols-outlined">remove</span>
                </AddRemove>
                <Details p3 value={amount} onChange={onChangeHandler}>
                  {/* {currentFurniture ? currentFurniture.qty : amount} */}
                  {amount}
                </Details>
                <AddRemove onClick={addFurniture}>
                  <span className="material-symbols-outlined">add</span>
                </AddRemove>
              </Qty>
              <AddToCartButton onClick={addToCartHandler}>
                Add To Cart
              </AddToCartButton>
            </QtyAddToCart>
            <Tags>
              <Tag>
                <Details grey>SKL</Details>
                <Details grey ml>
                  : SS001
                </Details>
              </Tag>
              <Tag>
                <Details grey>Category</Details>
                <Details grey ml>
                  : Sofas
                </Details>
              </Tag>
              <Tag>
                <Details grey>Tags</Details>
                <Details grey ml>
                  : {furniture.category}
                </Details>
              </Tag>
              <Tag>
                <Details grey>Share</Details>
                <SocialMedia grey ml>
                  :
                  <Social>
                    <span className="material-symbols-outlined">thumb_up</span>
                  </Social>
                  <Social>
                    <span className="material-symbols-outlined">share</span>
                  </Social>
                </SocialMedia>
              </Tag>
            </Tags>
          </DetailsGrid>
        </PurchaseStyles>
      )}
    </>
  );
}

export default Purchase;
