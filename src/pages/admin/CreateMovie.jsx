import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../../contexts/GlobalContext';
import Swal from 'sweetalert2';

export default function CreateMovie() {
    const navigate = useNavigate();
    const { setIsLoading } = useContext(GlobalContext);
    const [formData, setFormData] = useState({
        title: '',
        director: '',
        genre: '',
        release_year: '',
        abstract: '',
        image: '',
    });

   /*  const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            image: e.target.files[0]
        }));
    }; */

    const handleSubmit = async (e) => {
      e.preventDefault();

     /*  const form = new FormData();
      form.append("title", formData.title);
      form.append("director", formData.director);
      form.append("genre", formData.genre);
      form.append("release_year", formData.release_year);
      form.append("abstract", formData.abstract);
      form.append("image", formData.image);

      fetch("http://localhost:3000/api/v1/movies/create", {
        method: "POST",
        body: form,
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "Movie created successfully");
        })
        .catch((err) => {
          console.log(err, "Error creating movie");
        }); */

      setIsLoading(true);

        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            formDataToSend.append(key, formData[key]);
        });

        try {
            const response = await fetch('http://localhost:3000/api/v1/movies/create', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Movie created successfully',
                    icon: 'success',
                    confirmButtonText: 'Go to Admin Panel',
                    background: '#2C3034',
                    color: '#fff',
                    confirmButtonColor: '#0DCAF0',
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/admin');
                    }
                });
            }
        } catch (error) {
            console.error('Error creating movie:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to create movie',
                icon: 'error',
                confirmButtonText: 'Try Again',
                background: '#2C3034',
                color: '#fff',
                confirmButtonColor: '#0DCAF0',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mt-5 text-white">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card bg-secondary text-white">
                        <div className="card-body">
                            <h1 className="card-title text-center mb-4">Create Movie</h1>
                            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control bg-dark text-light"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="director" className="form-label">Director</label>
                                    <input
                                        type="text"
                                        className="form-control bg-dark text-light"
                                        id="director"
                                        name="director"
                                        value={formData.director}
                                        onChange={(e) => setFormData({ ...formData, director: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="genre" className="form-label">Genre</label>
                                    <input
                                        type="text"
                                        className="form-control bg-dark text-light"
                                        id="genre"
                                        name="genre"
                                        value={formData.genre}
                                        onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="release_year" className="form-label">Release Year</label>
                                    <input
                                        type="number"
                                        className="form-control bg-dark text-light"
                                        id="release_year"
                                        name="release_year"
                                        value={formData.release_year}
                                        onChange={(e) => setFormData({ ...formData, release_year: e.target.value })}
                                        min="1900"
                                        max={new Date().getFullYear()}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="abstract" className="form-label">Abstract</label>
                                    <textarea
                                        className="form-control bg-dark text-light"
                                        id="abstract"
                                        name="abstract"
                                        value={formData.abstract}
                                        onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                                        rows="3"
                                        required
                                    ></textarea>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">Movie Image</label>
                                    <input
                                        type="file"
                                        className="form-control bg-dark text-light"
                                        id="image"
                                        name="image"
                                        onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                                        accept="image/*"
                                        required
                                    />
                                </div>

                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-info text-white">
                                        Create Movie
                                    </button>
                                    <button 
                                        type="button" 
                                        className="btn btn-outline-light"
                                        onClick={() => navigate('/admin')}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}