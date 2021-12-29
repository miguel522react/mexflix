import { useState } from "react";
import Modal from "react-modal";
import { send } from "../service/send";
import styled from "styled-components";
import swal from "sweetalert";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ContFiel = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const BtnSend = styled.button`
  background: #ff6347;
  color: #fff;
  border-radius: 3px;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const ModalElement = ({ modalIsOpen, closeModal, data }) => {
  const [where, setWhere] = useState("");
  const [description, setDescription] = useState("");
  console.log(data);
  const poster = {
    backgroundImage: `url(${data.Poster})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "300px",
    height: "300px",
  };
  const styleLabel = {
    color: "black",
    marginBottom: "5px",
  };
  const styleInput = {
    border: "none",
    borderBottom: "solid 1px gray",
  };

  const setValuesForm = (event, type) => {
    const value = event.target.value;
    type == "where" ? setWhere(value) : setDescription(value);
  };

  const sendEmail = () => {
    send(where, description, data.Title);
    closeModal();
    swal({
      title: "success",
      text: "Se envio la pelicula!",
      icon: "success",
    });
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <MainContainer>
        <div style={poster} />
        <ContFiel>
          <label style={styleLabel} for="Para">
            Para
          </label>
          <input
            style={styleInput}
            type="text"
            name="Para"
            onChange={(e) => setValuesForm(e, "where")}
          />
        </ContFiel>
        <ContFiel>
          <label style={styleLabel} for="Text">
            Texto
          </label>
          <input
            style={styleInput}
            type="text"
            name="Text"
            onChange={(e) => setValuesForm(e, "description")}
          />
        </ContFiel>
        <BtnSend onClick={sendEmail}>Enviar</BtnSend>
      </MainContainer>
    </Modal>
  );
};

export default ModalElement;
