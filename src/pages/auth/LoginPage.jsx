
import Swal from "sweetalert2";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

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
               fetch("http://localhost:3000/login", {
                 method: "POST",
                 headers: {
                   "Content-Type": "application/json",
                   Accept: "application/json",
                 },
                 body: JSON.stringify(form),
               })
                 .then((response) => response.json())
                 .then((data) => {
                   console.log("Login successful!", data);
                   Swal.fire({
                     title: "Success!",
                     text: "Login successful!",
                     icon: "success",
                     confirmButtonText: "Go to Dashboard",
                     background: "#2C3034",
                     color: "#fff",
                     confirmButtonColor: "#0DCAF0",
                   }).then((result) => {
                     if (result.isConfirmed) {
                       setForm({
                         email: "",
                         password: "",
                       });
                       navigate("/dashboard"); // Redirect to dashboard
                     }
                   });
                 })
                 .catch((error) => {
                   console.error("Login failed:", error);
                   Swal.fire({
                     title: "Error!",
                     text: "Login failed. Please check your credentials.",
                     icon: "error",
                     confirmButtonText: "Try Again",
                     background: "#2C3034",
                     color: "#fff",
                     confirmButtonColor: "#0DCAF0",
                   });
                 });
           // alert("Registered successfully!");
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
            <h2 className="card-title text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
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
              <button type="submit" className="btn btn-info w-100 text-white">
                Login
              </button>
              <div className="text-center mt-3">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="btn btn-outline-info btn-sm text-white"
                >
                  Register here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default LoginPage; 