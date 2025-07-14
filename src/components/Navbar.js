import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <Link to="/">My Portfolio</Link>
      </Logo>
      <Menu>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #333;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: white;
  font-size: 24px;
`;

const Menu = styled.div`
  a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-size: 18px;
  }
`;

export default Navbar;
