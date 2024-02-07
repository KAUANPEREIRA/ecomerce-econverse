import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: auto;
  max-width: 1280px;
  width: 100%;
`;

export const HeaderMenuOne = styled.div`
  margin: auto;
  display: flex;
  max-width: 700px;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderSpan = styled.div`
  display: flex;
  align-items: center;
  color: #9f9f9f;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 600;
  margin-left: 50px;
`;
