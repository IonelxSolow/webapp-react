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
    <>

      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Amazing FILMS reviews</h1>
          <p className="col-md-8 fs-4">
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
                  <div className="card h-100">
                    <img src={`http://localhost:3000/images/${movie?.image}`} alt={movie.title} className="card-img-top"/>
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
