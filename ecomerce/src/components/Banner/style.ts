import styled from "styled-components";

export const BannerImageBackrund = styled.div`
  background-image: url("./Banner.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 390px;
`;
export const BannerContainer = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 390px;
`;

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 822px;
  width: 100%;
  margin-left: 92px;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

export const BannerTitleContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 822px;
  width: 100%;
  margin: 0px;
  padding: 0px;
`;

export const BannerTitle = styled.h1`
  font-size: 48px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #fff;
`;

export const BannerSubtitle = styled.h3`
  margin-top: -20px;
  font-size: 36px;
  font-weight: 600;
  line-height: 54px;
  color: #fff;
`;

export const ButtonBanner = styled.button`
  font-family: "Poppins", sans-serif;
  color: #fff;
  width: 227px;
  height: 60px;
  background-color: rgba(247, 25, 99, 1);
  border: 1px solid transparent;
  border-radius: 5px;
  @media (max-width: 768px) {
    margin-left: 20%;
  }
`;
