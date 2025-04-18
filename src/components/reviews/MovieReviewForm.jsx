import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function MovieReviewForm({movieId}) {


        console.log(movieId, 'movieId from MovieReviewForm');
        const api_url = 'http://localhost:3000/api/v1/movies/' + movieId + '/reviews';
        console.log(api_url, 'api_url from MovieReviewForm');
        
        const navigate = useNavigate();
        // add a state object for the form fields

        const initialFormData = {
            name: '',
            vote: '',
            text: ''
        }
        const [formData, setFormData] = useState(initialFormData)

        const [formErrors, setFormErrors] = useState({})

        const [success, setSuccess] = useState(false)
        const isFormValid = (data) => {
            const errors = {}
            //check fi the fields are empty
            if (data.name.length === 0) {
                errors.name = 'Name is required'
            }
            if (!data.vote) {
                errors.vote = 'Vote is required'
            }
            if (!data.text) {
                errors.text = 'Review is required'
            }

            //check if the fields are valid
            //name
            if (data.name.length < 2) {
                errors.name = 'Name must be at least 2 characters long'
            }
            if (data.name.length > 50) {
                errors.name = 'Name must be at most 50 characters long'
            }
            //vote
            if(data.vote < 1 || data.vote > 5){
                errors.vote = 'Vote must be between 1 and 5'
            }
            //review
            if(data.text.length < 10){
                errors.text = 'Review must be at least 10 characters long'
            }
            if(data.text.length > 500){
                errors.text = 'Review must be at most 500 characters long'
            }
            

            setFormErrors(errors)
            console.log(errors, 'errors from MovieReviewForm');
            console.log(Object.keys(errors))
            return Object.keys(errors).length === 0

        }
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted!", formData);
      // sumbission logic here

        //validate the form data
        if(!isFormValid(formData)){
            console.log('Form is not valid');
            return;
        }

        console.log('Form is valid', formData);

        //perform an ajax call to the given endpoint
        fetch(api_url, {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
                },
            body: JSON.stringify(formData)
        }).then(response => response.json())
          .then(data => {
                console.log('Form submitted successfully', data);
                if(data?.message){
                  setSuccess(data.message);

                  setTimeout(() => {
                    navigate(0)

                    setSuccess(false);
                  }, 2000);
                }
            })
            .catch(error => {
                console.log('Error submitting form', error);
            });

    };

    return (
      <div className="add-review">
        <h3 className="text-white">Add a Review</h3>
        {Object.keys(formErrors).length > 0 && (
            <div className="alert alert-danger" role="alert">
                <ul className="mb-0 list-unstyled">
                    {Object.keys(formErrors).map((key) => (
                        <li key={key}>{formErrors[key]}</li>
                    ))}
                </ul>
            </div>
        )}
        {success && (
          <div className="alert alert-success" role="alert">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} action="POST" className="mb-3">
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white">
              Name
            </label>
            <input
              type="text"
              className="form-control bg-secondary text-white"
              name="name"
              id="name"
              aria-describedby="helpId"
              placeholder="Insert your name"
              autoComplete="off"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
               /*required*/
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
              placeholder="Vote from 1 to 5"
              aria-describedby="helpId"
              value={formData.vote}
              onChange={(e) => setFormData({ ...formData, vote: parseInt(e.target.value) })}
              /*required*/
            />
          </div>

          <div className="mb-3">
            <textarea
              className="form-control bg-secondary text-white"
              rows="3"
              placeholder="Write your review here..."
              value={formData.text}
              onChange={(e) => setFormData({ ...formData, text: e.target.value })}
              /*required*/
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