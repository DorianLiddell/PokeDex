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
                    {/* <li><NavLink 
                    to="/pokeMon">PokeMon</NavLink></li> */}
                    
                    <NavLink 
                    to="/catch">Catch</NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;