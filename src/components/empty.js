import styled from "styled-components";

const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Empty = ({ text = "No hay favoritos" }) => {
  return (
    <EmptyContainer>
      <p>{text}</p>
    </EmptyContainer>
  );
};

export default Empty;
