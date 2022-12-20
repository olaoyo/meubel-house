import { Outlet, Link } from "react-router-dom";
import {
  HeaderStyles,
  LogoGrid,
  Logo,
  Menu,
  MenuItem,
  Cart,
  ProfileOuter,
  ProfileInner,
} from "./Header.styles";
import Search from "../../inputs/search/Search.component";
import { LoginButton } from "../../buttons/Buttons";
import MeubelHouseLogo from "./img/MeubelHouseLogo.png"
import { APILink } from "../../../api/api";

function Header() {
  return (
    <>
      <HeaderStyles>
        
        <LogoGrid>
          <Link to={APILink.furniture.home}>
            <Logo src={MeubelHouseLogo} />
          </Link>
        </LogoGrid>
        
        <Search />
        <Menu>
          <Link to={APILink.furniture.shop}>
            <MenuItem>Shop</MenuItem>
          </Link>
          <MenuItem>Admin</MenuItem>
          <MenuItem>Profile</MenuItem>
        </Menu>
        <Cart>
          <Link to={APILink.cart}><span className="material-symbols-outlined">shopping_cart</span></Link>
        </Cart>
        <ProfileOuter>
          <ProfileInner>
            <p>OO</p>
          </ProfileInner>
        </ProfileOuter>
        <LoginButton>Login</LoginButton>
      </HeaderStyles>

      <Outlet />
    </>
  );
}

export default Header;
