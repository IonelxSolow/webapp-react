import { useState, useEffect } from "react";

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
    <div className="home-page">
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>

      <h2>Movies</h2>

      <section className="movies">
        <div className="container">
          <div className="row">
            <div className="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
              {movies.map((movie) => (
                <div key={movie.id} className="col">
                  <div className="card">
                    <img src={`http://localhost:3000/images/${movie?.image}`} alt="" className="card-img-top"/>
                    <div className="card-body">
                      <h3>{movie.title}</h3>
                      <p>{movie.director}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
