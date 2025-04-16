import { Link } from "react-router-dom";


export default function MovieCard({ movie }) {

    const{ id, title, director, image } = movie;

    return (
      <div  className="col">
        <div className="card bg-secondary text-white rounded-3 shadow-sm hover-zoom">
          <Link to={`/movie/${id}`}>
            <img
              src={`http://localhost:3000/images/${image}`}
              alt={title}
              className="card-img-top"
            />
          </Link>
          <div className="card-body">
            <h3>{title}</h3>
            <p>{director}</p>
          </div>
        </div>
      </div>
    );
}