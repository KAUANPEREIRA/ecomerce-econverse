import styled from "styled-components";
export const BrowseByTagContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  margin: auto;
`;

export const NavigateMarks = styled.h1`
  margin: auto;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: rgba(247, 25, 99, 1);
`;

export const Circle = styled.div`
  width: 211px;
  height: 211px;
  margin-top: 40px;
  margin-left: 20px;
  border-radius: 50%;
  background-color: #fff;
  text-align: center;
  display: flex;
  align-items: center;

  justify-content: center;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.22);
  @media (max-width: 768px) {
    margin-left: 20%;
  }
`;

export const ContentCarousel = styled.div`
  display: flex;
  padding-left: 20px;
`;
