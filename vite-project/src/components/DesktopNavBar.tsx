import { Link } from "react-router-dom"

function DesktopNavBar() {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="/path/to/your/logo.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/inventory">Inventory</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/nutrition">Nutrition</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/fitness">Fitness</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}

export default DesktopNavBar