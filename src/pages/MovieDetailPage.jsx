import { useState, useEffect, use } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieReviewCard from "../components/MovieReviewCard";
import MovieReviewForm from "../components/reviews/MovieReviewForm";

export default function MovieDetailPage() {
  // get the route param from the url
  const { id } = useParams();

  // prepare the state to hold the movie data
  const [movie, setMovie] = useState({});

  // create an instance of the navigate function to redirect the user
  const navigate = useNavigate();

  // fetch the movie data from the api
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/movies/" + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if(data?.error){
           navigate('/404')
        }
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
                <h2 className="text-white">Reviews</h2>
                <div
                  className="reviews-container"
                  style={{
                    maxHeight: "600px",
                    overflowY: "auto",
                    paddingRight: "10px",
                  }}
                >
                  {movie.reviews.slice(0, 3).map((review) => (
                    <MovieReviewCard key={review.id} userReview={review} />
                  ))}
                </div>
              </div>
            ) : (
              <p>No reviews yet</p>
            )}
          </div>

          <hr />

          <div className="container">
              <MovieReviewForm movieId={movie.id} />
          </div>
        </div>
      </div>
    </>
  );
}
