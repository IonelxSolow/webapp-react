export default function MovieReviewForm({movieId}) {


    

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted!");
      // sumbission logic here
    };

    return (
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
    );

}