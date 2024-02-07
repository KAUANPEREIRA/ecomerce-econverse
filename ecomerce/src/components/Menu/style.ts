import styled from "styled-components";

export const MenuProductsContainer = styled.div`
  max-width: 1200px;
  flex-direction: column;
  margin: auto;
  display: flex;
`;

export const ContentTitle = styled.div`
  max-width: 1200px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivHr = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  width: 360px;

  @media (max-width: 768px) {
    margin-top: 100px;
  }

  background-color: rgba(222, 222, 222, 1);
  border: 1px solid rgba(222, 222, 222, 1);
`;

export const RelationsProductions = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 30;
  font-weight: 700;
  color: rgba(247, 25, 99, 1);

  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;

export const MenuItems = styled.ul`
  margin-top: -20px;
  list-style: none;
  display: flex;
  border: 1px solid rgba(222, 222, 222, 1);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  font-weight: 500;
  color: rgba(59, 59, 59, 1);
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  padding-left: 40px;
  max-width: 211px;
  width: 100%;
  border-left: 1px solid rgba(222, 222, 222, 1);

  &:first-child {
    color: rgba(247, 25, 99, 1);
    cursor: pointer;
    border-left: 0px solid rgba(222, 222, 222, 1);
  }

  &:hover {
    color: rgba(247, 25, 99, 1);
    cursor: pointer;
  }
`;
