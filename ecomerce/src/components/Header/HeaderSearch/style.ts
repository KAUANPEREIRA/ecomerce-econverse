import styled from "styled-components";
export const HeaderSearchContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LogoApp = styled.img`
  @media (max-width: 768px) {
    width: 50%;
    margin: auto;
  }
`;
export const InputSearch = styled.input`
  border: 1px solid transparent;
  font-family: "Poppins", sans-serif;
  outline: 0;
  border-radius: 10px;
  max-width: 657px;
  width: 100%;
  height: 48px;
  background-color: #f6f5f2;

  @media (max-width: 768px) {
    width: 70%;
    margin: auto;
  }
`;

export const ShoppingCart = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
