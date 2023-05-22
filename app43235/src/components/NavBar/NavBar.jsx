import CartWidget from "../CartWidget/CartWidget";
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <div className="navbar-menu">
                <a href="#">Inicio</a>
                <a href="#">Menu</a>
                <a href="#">Contacto</a>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar;