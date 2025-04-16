export default function Footer() {
  return (
    <footer className="py-4 bg-dark text-white">
      <div className="container">
        <div className="row g-3">
          <div className="col-12 col-md-4">
            <div className="logo">
              <img src="../public/vite.svg" alt="Logo" />
            </div>
            <p>
              <i className="bi bi-copyright">All rights reserved.</i>
            </p>
          </div>
          <div className="col-12 col-md-4">
            <h3>Quick links</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white">
                  Movies
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h3>Legal</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
