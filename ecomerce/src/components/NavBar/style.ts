import styled from "styled-components";
export const NavbarContainer = styled.nav`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;

  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavBarItems = styled.ul`
  max-width: 1200px;
  width: 100%;
  gap: 20px;
  display: flex;
  list-style: none;
  font-family: "Poppins", sans-serif;
`;

export const NavBarItem = styled.li`
  padding-left: 50px;
  font-size: 12px;
  font-weight: 600;
  color: #9f9f9f;

  &:hover {
    color: rgba(
      247,
      25,
      99,
      1
    ); /* Change this to the color you want on hover */
    cursor: pointer;
  }
`;
