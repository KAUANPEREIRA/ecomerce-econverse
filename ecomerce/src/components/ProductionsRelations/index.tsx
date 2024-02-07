import {
  ContentText,
  ContentTitleProductios,
  DivHrProductions,
  RelationsProductions,
  ViewAll,
} from "./style";

export const ProductionsRelations = () => {
  return (
    <ContentTitleProductios>
      <DivHrProductions></DivHrProductions>
      <ContentText>
        <RelationsProductions>Produtos Relacionados</RelationsProductions>
        <ViewAll>Ver todos</ViewAll>
      </ContentText>
      <DivHrProductions></DivHrProductions>
    </ContentTitleProductios>
  );
};
