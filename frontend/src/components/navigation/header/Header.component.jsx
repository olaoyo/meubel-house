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

function Header() {
  return (
    <>
      <HeaderStyles>
        
        <LogoGrid>
          <Link to="/">
            <Logo src={MeubelHouseLogo} />
          </Link>
        </LogoGrid>
        
        <Search />
        <Menu>
          <Link to="/shop">
            <MenuItem>Shop</MenuItem>
          </Link>
          <MenuItem>Admin</MenuItem>
          <MenuItem>Profile</MenuItem>
        </Menu>
        <Cart>
          <span className="material-symbols-outlined">shopping_cart</span>
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
