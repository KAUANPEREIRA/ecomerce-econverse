import styled from "styled-components";

export const PartnerContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const PartnerImageBackground = styled.div`
  background-image: url("./parthener.png");
  max-width: 574px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 284px;
  border-radius: 10px;

  background-color: black;
`;

export const PartnerContainerLinear = styled.div`
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

export const PartnerTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  color: #fff;
  margin-top: 40px;
  margin-left: 20px;
  font-size: 40px;
  font-weight: 700;
`;

export const PartnerDescription = styled.p`
  margin-left: 20px;
  margin-top: -22px;
  width: 180px;
  font-size: 16px;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;

export const ButtonCheckOut = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 900;
  width: 131px;
  height: 48px;
  border-radius: 10px;
  background-color: rgba(247, 25, 99, 1);
  color: #fff;
  border: none;
  margin-left: 20px;
`;
