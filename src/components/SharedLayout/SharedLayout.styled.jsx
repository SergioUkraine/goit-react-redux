import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  min-height: 100vh;
  background-color: aliceblue;
`;

export const Main = styled.main`
  padding: 30px;
`;

export const Header = styled.header`
  padding-left: 20px;
  background-color: antiquewhite;
`;

export const Controls = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
`;

export const ControlsLink = styled(NavLink)`
  height: 30px;
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background-color: lightseagreen;

  border-radius: 3px;
  color: white;
  text-decoration: none;

  :not(:last-child) {
    margin-right: 10px;
  }
  &.active {
    background-color: coral;
  }
  :hover {
    background-color: orange;
  }
`;
