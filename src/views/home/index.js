import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../../components/card";
import Category from "../../components/category";
import Filter from "../../components/filter";
import RangePicker from "../../components/rangePicker";
import Container from "../../components/container";
import SelectSearch from "../../components/selectSearch";
import Empty from "../../components/empty";
import {
  getCategories,
  filterByCategory,
  findMovie,
  filterByDate,
} from "../../helpers/utils";
import { search } from "../../components/assets";
import data from "../../data/moviedata.json";

const CategoriesContaier = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  width: 90%;
  align-self: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

const ContFilters = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  align-self: center;
`;

const ContIconSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SearchMovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  align-self: center;
  margin-bottom: 20px;
`;

const stylesInput = {
  background: "#1A2027",
  color: "#fff",
  border: "none",
  borderBottom: "solid 1px gray",
};

const Home = () => {
  const API = "http://www.omdbapi.com/?apikey=ef54be7d";
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [typeSearch, setTypeSearch] = useState("titulo");
  const [textFindMovie, setTextFindMovie] = useState("");
  const [indexedMovies, setIndexedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    matchMovies();
  }, []);

  useEffect(() => {
    const categories = getCategories(movies);
    setCategories(categories);
  }, [movies]);

  const filterCategory = (category) => {
    const result = filterByCategory(movies, category);
    setFilteredMovies(result);
    setTextFindMovie("");
  };

  const filterMoviesByDate = (initialDate, finalDate) => {
    const result = filterByDate(movies, initialDate, finalDate);
    setFilteredMovies(result);
    setTextFindMovie("");
  };

  const find = (event) => {
    const value = event.target.value.toLowerCase();
    setTextFindMovie(value);
    const result = findMovie(movies, value);
    setFilteredMovies(result);
  };

  const matchMovies = async () => {
    const dataMoviesIndexed = await data.reduce(
      (acc, el) => ({
        ...acc,
        [el.title]: el,
      }),
      {}
    );
    setLoading(false);
    setIndexedMovies(dataMoviesIndexed);
  };

  const setTitleMovie = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const moviesWidthInfo = (data) => {
    const movies = data.map((movie) => ({
      ...movie,
      ["genres"]: indexedMovies[movie.Title]?.info?.genres || [],
      ["plot"]: indexedMovies[movie.Title]?.info?.plot || "No hay descripción",
    }));
    return movies;
  };

  const getMovies = () => {
    fetch(`${API}&s=${title}&plot=full&page=1`)
      .then((result) => result.json())
      .then((data) => {
        const result = moviesWidthInfo(data.Search);
        setMovies(result);
        setFilteredMovies(result);
        console.log(result);
      });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SearchMovieContainer>
        <input
          style={stylesInput}
          placeholder="buscar pelicula"
          value={title}
          onChange={setTitleMovie}
        />
        <ContIconSearch onClick={getMovies}>
          <img src={search} width="30px" heigth="30px" />
        </ContIconSearch>
      </SearchMovieContainer>
      <ContFilters>
        <SelectSearch setTypeSearch={setTypeSearch} />
        {typeSearch == "titulo" ? (
          <Filter find={find} textFindMovie={textFindMovie} />
        ) : (
          <RangePicker filterMoviesByDate={filterMoviesByDate} />
        )}
      </ContFilters>
      {!loading ? (
        <>
          <CategoriesContaier>
            {categories.map((category, index) => (
              <Category
                key={index}
                category={category}
                filterCategory={filterCategory}
              />
            ))}
          </CategoriesContaier>
          <Container>
            {filteredMovies.map((movie, index) => (
              <Card key={index} movie={movie} isFavorite={false} />
            ))}
          </Container>
        </>
      ) : (
        <Empty text="cargando..." />
      )}
    </div>
  );
};

export default Home;
