import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ProductImageBackground = styled.div`
  background-image: url("./parthener.png");
  max-width: 574px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 284px;
  border-radius: 10px;
`;

export const ProductContainerLinear = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  );
  background-size: cover;
  height: 284px;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  color: #fff;
  margin-top: 40px;
  margin-left: 20px;
  font-size: 40px;
  font-weight: 700;
`;
