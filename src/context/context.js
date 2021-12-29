import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  return (
    <DataContext.Provider value={{ favoriteMovies, setFavoriteMovies }}>
      {children}
    </DataContext.Provider>
  );
};
