//funcion para extraer las categorias
export const getCategories = (data) => {
  //tomamos los arreglos de categorias dentro de cada elemento pelicula
  const categories = data.map((movie) => {
    return movie.genres;
  });
  //transformamos a un array plano
  const flatCategories = categories.reduce((acc, el) => acc.concat(el), []);
  //eliminamos las categorias duplicadas
  const result = flatCategories.filter((item, index) => {
    return flatCategories.indexOf(item) === index;
  });
  return result;
};

//filtramos las peliculas por categoria
export const filterByCategory = (data, category) => {
  const result = data.filter((movie) => movie.genres.includes(category));
  return result;
};

//filtramos peliculas por rango defechas
export const filterByDate = (data, initialDate, finalDate) => {
  const result = data.filter(
    (movie) => parseInt(movie.Year) >= initialDate && movie.Year <= finalDate
  );
  return result;
};

//buscamos pelicula por nombres
export const findMovie = (movies, value) => {
  const result = movies.filter((item) => {
    if (value == "") {
      return movies;
    } else if (item.Title.toLowerCase().includes(value)) {
      return item;
    }
  });
  return result;
};
