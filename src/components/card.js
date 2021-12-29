import { Fragment, useContext, useState } from "react";
import { DataContext } from "../context/context";
import Modal from "./modal";
import styled from "styled-components";
import swal from "sweetalert";
import { share, favorite, del } from "./assets";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: #1e1e1e;
`;

const Title = styled.h4`
  margin: 0px;
  padding: 0px;
`;

const Text = styled.p`
  padding: 0px;
  margin: 0px;
  color: #ababab;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const Icon = styled.div`
  cursor: pointer;
  margin-right: 10px;
`;

const Card = ({ movie, isFavorite }) => {
  const { favoriteMovies, setFavoriteMovies } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);

  const addFavorite = () => {
    setFavoriteMovies([...favoriteMovies, movie]);
    swal({
      title: "success",
      text: "Esta pelicula se agrego a favoritos!",
      icon: "success",
    });
  };

  const removeFavorite = () => {
    const result = favoriteMovies.filter((item) => item.Title !== movie.Title);
    setFavoriteMovies(result);
    swal({
      title: "success",
      text: "Esta pelicula se elimino de favoritos!",
      icon: "success",
    });
  };

  const shareMovie = () => {
    openModal();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      <CardContainer>
        <Title>{movie.Title}</Title>
        <Text>{movie.Year}</Text>
        <img src={movie.Poster} width="100%" heigth="200px" />
        <Text>{movie.plot}</Text>
        <IconContainer>
          <Icon>
            <img src={share} width="30px" heigth="30px" onClick={shareMovie} />
          </Icon>
          <Icon>
            {isFavorite ? (
              <img
                src={del}
                width="30px"
                heigth="30px"
                onClick={removeFavorite}
              />
            ) : (
              <img
                src={favorite}
                width="30px"
                heigth="30px"
                onClick={addFavorite}
              />
            )}
          </Icon>
        </IconContainer>
      </CardContainer>
      {isOpen && (
        <Modal modalIsOpen={isOpen} closeModal={closeModal} data={movie} />
      )}
    </Fragment>
  );
};

export default Card;
