import { useState } from "react";


export default function MovieReviewCard({ userReview }) {

    const {name, text, vote, created_at, updated_at} = userReview;

       const formatDate = (dateString) => {
         return new Date(dateString).toLocaleDateString("en-GB");
       };
    

        function ratingStars(vote) {
            const stars = [];
            const empty = [];

               for (let i = 0; i < vote; i++) {
                   stars.push(<i key={`star-fill-${i}`} className="bi bi-star-fill star-rating"></i>);
               }

               for (let i = 0; i < 5 - vote; i++) {
                   empty.push(
                     <i
                       key={`star-empty-${i}`}
                       className="bi bi-star star-rating"
                     ></i>
                   );
               }
               return [...stars, ...empty];
        }

       

return (
  <div className="card mb-3 bg-secondary text-white rounded-3">
    <div className="card-header d-flex justify-content-between align-items-center">
      <h3>{name}</h3>
      <div className="updated-at">Created at: {formatDate(created_at)}</div>
      <div className="vote">{ratingStars(vote)}</div>
    </div>
    <div className="card-body">
      <p>{text}</p>
    </div>
    <div className="card-footer">
      <div className="updated-at">Updated at: {formatDate(updated_at)}</div>
    </div>
  </div>
);


}