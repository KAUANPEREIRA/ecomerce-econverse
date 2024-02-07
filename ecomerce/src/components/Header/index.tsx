import { HeaderSearch } from "./HeaderSearch";
import { HeaderVantagens } from "./HeaderVantagens";
import { HeaderContainer } from "./style";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderVantagens />
      <HeaderSearch />
    </HeaderContainer>
  );
};
