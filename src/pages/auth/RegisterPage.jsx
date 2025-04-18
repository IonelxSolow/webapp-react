import React, { useState } from "react";

export default function RegisterPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [id === "registerName"
                ? "name"
                : id === "registerEmail"
                ? "email"
                : id === "registerPassword"
                ? "password"
                : id === "registerConfirmPassword"
                ? "confirmPassword"
                : ""
            ]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        setError("");
        // Registration logic here (e.g., API call)
        console.log("Registering user:", form);
        // Reset form or handle success/error as needed
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
            <div className="card shadow border-5 rounded-3" style={{ minWidth: 350, maxWidth: 400 }}>
                <div className="card-body bg-secondary text-white rounded-2">
                    <h3 className="card-title mb-4 text-center ">Register</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="registerName" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="registerName"
                                placeholder="Enter your name"
                                value={form.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="registerEmail" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="registerEmail"
                                placeholder="Enter your email"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="registerPassword" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="registerPassword"
                                placeholder="Enter your password"
                                value={form.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="registerConfirmPassword" className="form-label">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="registerConfirmPassword"
                                placeholder="Confirm your password"
                                value={form.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                        {error && (
                            <div className="alert alert-danger py-2">{error}</div>
                        )}
                        <button type="submit" className="btn btn-warning w-100">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}