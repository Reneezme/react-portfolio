import styled from "styled-components";


export const SidebarWrapper = styled.div`
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #333;
  padding-top: 50px;
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MenuItem = styled.li`
  padding: 10px;
`;

const MenuLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    background-color: #555;
  }
`;