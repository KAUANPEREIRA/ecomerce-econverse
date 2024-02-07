import {
  ContentTitle,
  DivHr,
  MenuItem,
  MenuItems,
  MenuProductsContainer,
  RelationsProductions,
} from "./style";

export const Menu = () => {
  return (
    <MenuProductsContainer>
      <ContentTitle>
        <DivHr></DivHr>
        <RelationsProductions>Produtos Relacionados</RelationsProductions>
        <DivHr></DivHr>
      </ContentTitle>
      <MenuItems>
        <MenuItem>CELULAR</MenuItem>
        <MenuItem>ACESSÓRIOS</MenuItem>
        <MenuItem>TABLETS</MenuItem>
        <MenuItem>NOTEBOOKS</MenuItem>
        <MenuItem>TVS</MenuItem>
        <MenuItem>VER TODOS</MenuItem>
      </MenuItems>
    </MenuProductsContainer>
  );
};
