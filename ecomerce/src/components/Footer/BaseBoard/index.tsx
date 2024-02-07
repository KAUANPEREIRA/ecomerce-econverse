import { BaseBoardContainer, CopyText } from "./style";

export const BaseBoard = () => {
  return (
    <BaseBoardContainer>
      <CopyText>
        Copyright © 2024. Todos os direitos reservados. Todas as marcas e suas
        imagens são de propriedade de seus respectivos donos. É vedada a
        reprodução, total ou parcial, de qualquer conteúdo sem expressa
        autorização.
      </CopyText>
      <div>
        <img src="./econverse.svg" />
      </div>
    </BaseBoardContainer>
  );
};
