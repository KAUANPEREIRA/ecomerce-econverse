import styled from "styled-components";

export const CardMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin: auto;
    gap: 20px;
  }
`;

export const VitrineProductsContainerMobile = styled.div`
  margin: auto;
  max-width: 1200px;
  width: 100%;
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;
