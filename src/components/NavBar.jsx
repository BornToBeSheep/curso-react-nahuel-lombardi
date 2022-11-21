import CartWidget from "./CartWidget"
const NavBar = () => {
    return (
        <div className="container-fluid Navbar__container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand fs-4" href="#"><img className="navbar__logo" src={"img/logo-amarillo.png"} /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                    <a className="nav-link active fs-4" aria-current="page" href="#">TodoSeguridad</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link text-warning fs-4" href="#">Alarmas domiciliarias</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link text-warning fs-4" href="#">Camaras</a>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <input className="form-control me-2 fs-4" type="search" placeholder="Buscar" aria-label="Search" />
                                    <button className="btn btn-outline-warning" type="submit">Buscar</button>
                                </form>
                            </div>
                        </div>
                        <CartWidget />
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default NavBar;