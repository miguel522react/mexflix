const styleSelect = {
  padding: "10px",
  marginRight: "10px",
  marginLeft: "10px",
  marginBottom: "10px",
};

const SelectSearch = ({ setTypeSearch }) => {
  const handleSelect = (event) => {
    const value = event.target.value;
    setTypeSearch(value);
  };
  return (
    <div>
      <select style={styleSelect} name="filtrar" onChange={handleSelect}>
        <option value="titulo">Titulo</option>
        <option value="fecha">Fecha</option>
      </select>
    </div>
  );
};

export default SelectSearch;
