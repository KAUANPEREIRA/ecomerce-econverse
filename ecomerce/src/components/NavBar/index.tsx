import { NavBarItem, NavBarItems, NavbarContainer } from "./style";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavBarItems>
        <NavBarItem>TODAS CATEGORIAS</NavBarItem>
        <NavBarItem>SUPERMERCADO</NavBarItem>
        <NavBarItem>LIVROS</NavBarItem>
        <NavBarItem>MODA</NavBarItem>
        <NavBarItem>LANÇAMENTOS</NavBarItem>
        <NavBarItem>OFERTAS DO DIA</NavBarItem>
        <NavBarItem>ASSINATURA</NavBarItem>
      </NavBarItems>
    </NavbarContainer>
  );
};
