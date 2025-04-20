import Swal from "sweetalert2";
import { useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import GlobalContext from "../../contexts/GlobalContext";



const RegisterPage = () => {

    const navigate = useNavigate();

    const {setIsLoading} = useContext(GlobalContext);
    setIsLoading(false);

    const registrationUrl ="http://localhost:3000/register";

    const initialFormState = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    const [form, setForm] = useState(initialFormState)
     

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!form.username) newErrors.username = "Username is required";
        if (!form.email) newErrors.email = "Email is required";
        if (!form.password) newErrors.password = "Password is required";
        if (form.password !== form.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            // Submit form logic here
            fetch(registrationUrl, {
                method: "POST",
                body: JSON.stringify(form),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }).then((response) => response.json())
              .then((data) => {
                console.log("Registered successfully!", data);
                // Handle successful registration (e.g., redirect to login page)
                 Swal.fire({
                   title: "Success!",
                   text: "Registration completed successfully",
                   icon: "success",
                   confirmButtonText: "Go to Login",
                   background: "#2C3034", // dark background
                   color: "#fff", // white text
                   confirmButtonColor: "#0DCAF0", // info color to match your theme
                 }).then((result) => {
                   if (result.isConfirmed) {
                     setForm(initialFormState);
                     navigate("/login");
                   }
                 });
              })
              .catch((error) => {
                console.error("Error registering:", error);
                // Handle error (e.g., show error message)
                Swal.fire({
                  title: "Error!",
                  text: "Registration failed. Please try again.",
                  icon: "error",
                  confirmButtonText: "Ok",
                  background: "#2C3034",
                  color: "#fff",
                  confirmButtonColor: "#0DCAF0",
                });
              });

            console.log("Form submitted successfully", form);
              
           // alert("Registered successfully!");
            //setForm(initialFormState);
            //navigate('/login')
        } else {
            setErrors(validationErrors);
        }

      
    };

    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
        <div
          className="card bg-secondary text-light shadow"
          style={{ minWidth: 350 }}
        >
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Register</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className={`form-control bg-dark text-light border-secondary ${
                    errors.username ? "is-invalid" : ""
                  }`}
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                />
                {errors.username && (
                  <div className="invalid-feedback text-warning">
                    {errors.username}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control bg-dark text-light border-secondary ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="invalid-feedback text-warning">
                    {errors.email}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className={`form-control bg-dark text-light border-secondary ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <div className="invalid-feedback text-warning">
                    {errors.password}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className={`form-control bg-dark text-light border-secondary ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <div className="invalid-feedback text-warning">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>
              <button type="submit" className="btn btn-info w-100 text-white">
                Register
              </button>
              <div className="text-center mt-3">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="btn btn-outline-info btn-sm text-white"
                >
                  Login here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default RegisterPage; 