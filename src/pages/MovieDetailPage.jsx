import { useState, useEffect, use } from "react";
import { useParams } from "react-router-dom";

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
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">{movie?.title && movie.title}</h1>
          <p className="col-md-8 fs-4">{movie?.abstract && movie.abstract}</p>
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
                  <div className="card mb-3" key={review.id}>
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h3>{review?.name}</h3>
                      <div className="updated-at">
                        Created at: {review?.updated_at}
                      </div>
                      <div className="vote">vote: {review?.vote}</div>
                    </div>
                    <div className="card-body">
                      <p>{review?.text}</p>
                    </div>
                    <div className="card-footer">
                      <div className="updated-at">
                        Updated at: {review?.updated_at}
                      </div>
                    </div>
                  </div>
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
