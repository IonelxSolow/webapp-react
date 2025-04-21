import { useState, useEffect } from "react";
//import GlobalContext from "../../contexts/GlobalContext";
//import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Admin() {

     const [movies, setMovies] = useState([]);
    // const { setIsLoading } = useContext(GlobalContext);

     useEffect(() => {
      // setIsLoading(true);

       fetch("http://localhost:3000/api/v1/movies")
         .then((response) => response.json())
         .then((data) => {
           console.log(data);
           setMovies(data);
         })
         .catch((error) => {
           console.error("Error fetching movies:", error);
         })

        /*  .finally(() => {
           setIsLoading(false);
         }); */
     }, []);

    return (
      <div className="container mt-5 text-white">
        <header className="d-flex justify-content-between align-items-center mb-4">
          <h1>Admin Page</h1>
          <Link className="btn btn-primary" to="/admin/movie/create">
            Add Movie
          </Link>
        </header>

        <div className="table-responsive text-white">
          <table className="table table-primary">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Cover</th>
                <th scope="col">Title</th>
                <th scope="col">Abstract</th>
                <th scope="col">Author</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie.id}>
                  <th scope="row">{movie.id}</th>
                  <td>
                    <img
                      src={`http://localhost:3000/images/${movie.image}`}
                      alt={movie.title}
                      className="card-img-top"
                    />
                  </td>
                  <td>{movie.title}</td>
                  <td>{movie.abstract}</td>
                  <td>{movie.author}</td>
                  <td className="">
                    <button className="btn btn-success mt-2">View</button>
                    <button className="btn btn-warning mt-2">Edit</button>
                    <button className="btn btn-danger mt-2">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}