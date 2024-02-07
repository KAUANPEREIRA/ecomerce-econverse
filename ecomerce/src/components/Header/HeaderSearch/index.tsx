import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
// import Group from "../Group.svg";
// import Logo from "../Logo.svg";
import {
  HeaderSearchContainer,
  InputSearch,
  LogoApp,
  ShoppingCart,
} from "./style";
export const HeaderSearch = () => {
  return (
    <HeaderSearchContainer>
      <LogoApp src="./Logo.svg" />

      <InputSearch placeholder="Oque você esta buscando ?" />
      <BsSearch
        style={{
          marginLeft: "-150px",
          marginTop: "15px",
          color: "#9f9f9f",
        }}
      />
      <ShoppingCart>
        <img src="./Group.svg" />
        <AiOutlineHeart
          style={{ color: "#9f9f9f", marginLeft: "15px" }}
          size={25}
        />
        <BiUserCircle
          style={{ color: "#9f9f9f", marginLeft: "15px" }}
          size={25}
        />
        <AiOutlineShoppingCart
          style={{ color: "#9f9f9f", marginLeft: "15px" }}
          size={25}
        />
      </ShoppingCart>
    </HeaderSearchContainer>
  );
};
