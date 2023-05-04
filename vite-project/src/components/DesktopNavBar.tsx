interface NavProps {
  Page: string;
}

function DesktopNavBar({Page}: NavProps) {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className={Page === "Home" ? 'nav-link active' : 'nav-link'} aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className={Page === "Nutrition" ? 'nav-link active' : 'nav-link'} href="#">Nutrition</a>
          </li>
          <li className="nav-item">
            <a className={Page === "Inventory" ? 'nav-link active' : 'nav-link'} href="#">Inventory</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}

export default DesktopNavBar