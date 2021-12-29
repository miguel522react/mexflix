import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
  margin-bottom: 30px;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.p`
  margin: 0px;
  font-weight: bold;
  color: red;
`;

const stylesLink = {
  color: "white",
  margin: "0px",
  marginLeft: "10px",
  padding: "10px",
  textDecoration: "none",
};

const Layout = (props) => {
  return (
    <div>
      <NavContainer>
        <Title>Mexflix</Title>
        <LinksContainer>
          <Link to="/" style={stylesLink}>
            Inicio
          </Link>
          <Link to="/favorites" style={stylesLink}>
            Favoritos
          </Link>
        </LinksContainer>
      </NavContainer>

      {props.children}
    </div>
  );
};

export default Layout;
