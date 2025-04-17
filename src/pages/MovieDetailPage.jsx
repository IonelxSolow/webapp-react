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

   const handleSubmit = (e) => {
     e.preventDefault();
     console.log("Form submitted!");
     // sumbission logic here
   };

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
            <div className="add-review">
              <h3 className="text-white">Add a Review</h3>

              <form onSubmit={handleSubmit} action="POST" className="mb-3">
                <div className="mb-3">
                  <label htmlFor="username" className="form-label text-white">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control bg-secondary text-white"
                    name="username"
                    id="username"
                    aria-describedby="helpId"
                    placeholder="anonymous"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="vote" className="form-label text-white">
                    Vote
                  </label>
                  <input
                    type="number"
                    className="form-control bg-secondary text-white"
                    name="vote"
                    id="vote"
                    min="1"
                    max="5"
                    placeholder="1"
                    aria-describedby="helpId"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control bg-secondary text-white"
                    rows="3"
                    placeholder="Write your review here..."
                  ></textarea>
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-secondary mt-2">
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
