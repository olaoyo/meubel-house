import { NavLink } from "react-router-dom";
import { APILink } from "../../../api/api";
import {
  HomeNavStyles,
  HomeParagraphs,
  HomeNavArrowActive,
} from "./HomeNav.styles";

function HomeNav({ route }) {
  return (
    <HomeNavStyles>
      <HomeParagraphs medium>
        <NavLink to={APILink.furniture.home}>Home</NavLink>
      </HomeParagraphs>

      <HomeNavArrowActive>
        <span className="material-symbols-outlined">keyboard_arrow_right</span>
      </HomeNavArrowActive>
      <HomeParagraphs>{route}</HomeParagraphs>
    </HomeNavStyles>
  );
}

export default HomeNav;
