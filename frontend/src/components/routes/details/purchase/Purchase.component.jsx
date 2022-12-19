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

import Loading from "../../../loading/Loading.component";
import Message from "../../../message/Message.component";

function Purchase({ loading, furniture, error }) {
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
                <AddRemove>
                  <span className="material-symbols-outlined">remove</span>
                </AddRemove>
                <Details p3>1</Details>
                <AddRemove>
                  <span className="material-symbols-outlined">add</span>
                </AddRemove>
              </Qty>
              <AddToCartButton>Add To Cart</AddToCartButton>
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
