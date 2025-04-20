import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Handle login logic here
    console.log(form);
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
      <div
        className="card shadow border-5 rounded-3"
        style={{ minWidth: 350, maxWidth: 400 }}
      >
        <div className="card-body bg-secondary text-white rounded-2">
          <h3 className="card-title mb-4 text-center">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-warning w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
