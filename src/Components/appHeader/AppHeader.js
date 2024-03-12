import { Link, NavLink } from 'react-router-dom';
import '../appHeader/appHeader.css'

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>PokeDex</span> 
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <Link to="/catch">Catch</Link>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;