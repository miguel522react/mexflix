import styled from "styled-components";

const CategoryItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: tomato;
  padding: 10px;
  margin-right: 10px;
  width: 150px;
  height: 25px;
  border-radius: 3px;
  cursor: pointer;
`;

const Text = styled.p`
  margin: 0px;
  width: max-content;
`;

const Category = ({ category, filterCategory }) => {
  return (
    <CategoryItem onClick={() => filterCategory(category)}>
      <Text>{category}</Text>
    </CategoryItem>
  );
};

export default Category;
