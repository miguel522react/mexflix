import { useContext } from "react";
import { DataContext } from "../../context/context";
import Container from "../../components/container";
import Empty from "../../components/empty";
import Card from "../../components/card";

const Favorites = () => {
  const { favoriteMovies } = useContext(DataContext);

  return (
    <div>
      {favoriteMovies.length > 0 ? (
        <Container>
          {favoriteMovies.map((movie, index) => (
            <Card key={index} movie={movie} isFavorite={true} />
          ))}
        </Container>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Favorites;
