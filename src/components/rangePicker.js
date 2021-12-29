import { useState } from "react";
import styled from "styled-components";
import swal from "sweetalert";

const RangeContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-bottom: 10px;
`;

const BtnFilter = styled.button`
  background: none;
  border: solid 1px #fff;
  color: #fff;
  margin-left: 10px;
`;

const RangePicker = ({ filterMoviesByDate }) => {
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");

  const handleChangeDate = (event, type) => {
    const value = event.target.value;
    type == "initial" ? setInitialDate(value) : setFinalDate(value);
  };

  const filterByDate = () => {
    const initial = parseInt(initialDate);
    const final = parseInt(finalDate);
    const minRange = 1800;
    const maxRange = 2021;
    if (
      initial > final ||
      initial < minRange ||
      final < minRange ||
      final > maxRange ||
      initial > maxRange ||
      !initial ||
      !final
    ) {
      swal({
        title: "Error",
        text: "El rango de fechas es incorrecto!",
        icon: "error",
      });
      setInitialDate("");
      setFinalDate("");
    } else {
      filterMoviesByDate(initial, final);
      setInitialDate("");
      setFinalDate("");
    }
  };

  return (
    <RangeContainer>
      <input
        style={{ padding: "10px", width: "70px" }}
        placeholder="Fecha inicial"
        value={initialDate}
        onChange={(e) => handleChangeDate(e, "initial")}
      />
      <input
        style={{ padding: "10px", width: "70px" }}
        placeholder="Fecha final"
        value={finalDate}
        onChange={(e) => handleChangeDate(e, "final")}
      />
      <BtnFilter onClick={filterByDate}>Filtrar</BtnFilter>
    </RangeContainer>
  );
};

export default RangePicker;
