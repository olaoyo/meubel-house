import {
  DescriptionStyles,
  Paragraph,
  Furniture,
  FurnitureCard,
  FurnitureImg,
} from "./Description.styles";

function Description({ furniture }) {
  return (
    <DescriptionStyles>
      <Paragraph p1>Description</Paragraph>
      <Paragraph grey>{furniture.description}</Paragraph>
      <Furniture>
        
        <FurnitureCard>
          <FurnitureImg src={furniture.image} alt={furniture.name} />
        </FurnitureCard>

        <FurnitureCard>
          <FurnitureImg src={furniture.image} alt={furniture.name} />
        </FurnitureCard>
        
      </Furniture>
    </DescriptionStyles>
  );
}

export default Description;
