import { useState, useEffect } from "react";

import MovieCard from "../components/MovieCard";
import GlobalContext from "../contexts/GlobalContext";
import { useContext } from "react";


export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const { setIsLoading } = useContext(GlobalContext);

  useEffect(() => {

    setIsLoading(true);
    
    fetch("http://localhost:3000/api/v1/movies")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      })

      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsLoading]);

  return (
    <>
      <div className="p-2 mb-4 bg-dark text-white">
        <div className="container-fluid py-2 text-center">
          <h1 className="display-5 fw-bold text-white mx-auto">
            Amazing FILMS reviews
          </h1>
          <p className="fs-4 text-light mx-auto" style={{ maxWidth: "800px" }}>
            Using a series of utilities, you can create this jumbotron, just
            like the one in previous versions of Bootstrap. Check out the
            examples below for how you can remix and restyle it to your liking.
          </p>
        </div>
      </div>

      <section className="movies">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {movies.map((movie) => (
             <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
