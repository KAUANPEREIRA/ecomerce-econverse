import styled from "styled-components";
export const BaseBoardContainer = styled.div`
  margin: auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CopyText = styled.p`
  width: 698px;
  font-size: 10px;
  line-height: 13px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);

  @media (max-width: 768px) {
    width: 300px;
  }
`;
