import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/movies")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);

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
              <div key={movie.id} className="col">
                <div className="card bg-secondary text-white rounded-3 shadow-sm hover-zoom">
                  <Link to={`/movie/${movie.id}`}>
                    <img
                      src={`http://localhost:3000/images/${movie?.image}`}
                      alt={movie.title}
                      className="card-img-top"
                    />
                  </Link>
                  <div className="card-body">
                    <h3>{movie.title}</h3>
                    <p>{movie.director}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
