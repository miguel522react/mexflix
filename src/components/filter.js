import styled from "styled-components";

const FilterContainer = styled.div`
  padding: 10px;
  margin-bottom: 10px;
`;

const Filter = ({ find, textFindMovie }) => {
  return (
    <FilterContainer>
      <input
        style={{ padding: "10px" }}
        placeholder="Escribe un titulo"
        onChange={find}
        value={textFindMovie}
      />
    </FilterContainer>
  );
};

export default Filter;
