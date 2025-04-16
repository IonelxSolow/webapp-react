export default function MovieReviewCard({ userReview }) {

    const {name, text, vote, updated_at} = userReview;


        function ratingStars(vote) {
            const stars = [];
            const empty = [];

               for (let i = 0; i < vote; i++) {
                   stars.push(<i key={i} className="bi bi-star-fill star-rating"></i>);
               }

               for (let i = 0; i < 5 - vote; i++) {
                   empty.push(<i key={i} className="bi bi-star star-rating"></i>);
               }
               return [...stars, ...empty];
        }


return (
  <div className="card mb-3 bg-secondary text-white rounded-3">
    <div className="card-header d-flex justify-content-between align-items-center">
      <h3>{name}</h3>
      <div className="updated-at">Created at: {updated_at}</div>
      <div className="vote">{ratingStars(vote)}</div>
    </div>
    <div className="card-body">
      <p>{text}</p>
    </div>
    <div className="card-footer">
      <div className="updated-at">Updated at: {updated_at}</div>
    </div>
  </div>
);


}