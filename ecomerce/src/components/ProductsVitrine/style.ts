import styled from "styled-components";

export const VitrineProductsContainer = styled.div`
  margin: auto;
  max-width: 1200px;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Card = styled.div`
  max-width: 270px;
  height: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.22);
  margin-bottom: 40px;
`;

export const CardDescription = styled.span`
  margin-top: 10px;
  font-family: "Poppins", sans-serif;
  font-weight: 300px;
  color: rgba(63, 63, 64, 1);
  font-size: 15px;
  text-align: center;
`;

export const PriceTraced = styled.span`
  margin-top: 10px;
  font-family: "Poppins", sans-serif;
  font-weight: 300px;
  color: rgba(63, 63, 64, 1);
  font-size: 15px;
  text-decoration: line-through;
`;

export const Price = styled.span`
  margin-top: 10px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: rgba(63, 63, 64, 1);
`;

export const PriceInstallments = styled.span`
  margin-top: 10px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: rgba(63, 63, 64, 1);
`;

export const ButtonPurchase = styled.button`
  margin-left: 10px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  width: 245px;
  height: 44px;
  border-radius: 4px;
  background-color: rgba(247, 25, 99, 1);
  color: #fff;
  border: none;
  cursor: pointer;
`;
