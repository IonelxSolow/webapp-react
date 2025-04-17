import { Link } from "react-router-dom"

export default function NotFound() {

    return (
        <div className="container text-center text-white mt-5">
            <h1 className="display">404</h1>
            <h2>Page Not Found</h2>
            <p className="lead">The page you are looking for does not exist.</p>
            <Link to='/' className="btn btn-secondary">Go to Home</Link>
        </div>
    )
}