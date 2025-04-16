import { useState, useEffect, use } from "react";
import { useParams } from "react-router-dom";
import MovieReviewCard from "../components/MovieReviewCard";

export default function MovieDetailPage() {
  // get the route param from the url
  const { id } = useParams();

  // prepare the state to hold the movie data
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/movies/" + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  }, []);

  return (
    <>
      {/* jumbotron */}
      <div className="p-2 mb-4 bg-dark text-white">
        <div className="container-fluid py-2 text-center">
          <h1 className="display-5 fw-bold text-white mx-auto">
            {movie?.title && movie.title}
          </h1>
          <p className="fs-4 text-light mx-auto" style={{ maxWidth: "800px" }}>
            {movie?.abstract && movie.abstract}
          </p>
        </div>
      </div>
   
      <div className="container">
        <div className="row">
          {/* Movie Image Column */}
          <div className="col-md-4">
            <img
              src={`http://localhost:3000/images/${movie?.image}`}
              alt={movie?.title}
              className="img-fluid rounded"
            />
          </div>

          {/* Reviews Column */}
          <div className="col-md-8">
            {movie?.reviews && movie.reviews.length > 0 ? (
              <div>
                <h2>Reviews</h2>
                {movie.reviews.map((review) => (
                  <MovieReviewCard key={review.id} userReview={review} />
                ))}
              </div>
            ) : (
              <p>No reviews yet</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
