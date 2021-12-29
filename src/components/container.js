import styled from "styled-components";

const Cont = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  width: 90%;
  align-self: center;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Container = ({ children }) => {
  return <Cont>{children}</Cont>;
};

export default Container;
