import { NavLink } from "react-router-dom";
import {
  DetailsNavStyles,
  DetailsParagraphs,
  DetailsNavArrowActive,
  DetailsNavButton,
} from "./DetailsNav.styles";

import { APILink } from "../../../api/api";

function DetailsNav({ home, shop, furniture, error }) {
  return (
    <DetailsNavStyles>
      <DetailsParagraphs>
        <NavLink to={APILink.furniture.home}>{home}</NavLink>
      </DetailsParagraphs>

      <DetailsNavArrowActive>
        <span className="material-symbols-outlined">keyboard_arrow_right</span>
      </DetailsNavArrowActive>

      <DetailsParagraphs>
        <NavLink to={APILink.furniture.shop}>{shop}</NavLink>
      </DetailsParagraphs>

      <DetailsNavArrowActive>
        <span className="material-symbols-outlined">keyboard_arrow_right</span>
      </DetailsNavArrowActive>

      <DetailsNavButton>
        {error ? (
          <DetailsParagraphs>{error}</DetailsParagraphs>
        ) : (
          <DetailsParagraphs black>{furniture.name}</DetailsParagraphs>
        )}
      </DetailsNavButton>
    </DetailsNavStyles>
  );
}

export default DetailsNav;
