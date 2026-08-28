import {Link} from "react-router-dom";
import './Header.css';

export default function Header({favoriteCount}) {
    return(
    <header className="header">
        <h1 className="logo">Pssat Shrine</h1>
        <nav>
            <Link to="/" className="link">Catalogo</Link>
            <Link to="/favoritos" className="link">
                Favoritos <span className="badge">{favoriteCount}</span>
            </Link>
        </nav>
    </header>
    );
}