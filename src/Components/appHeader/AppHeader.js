import { NavLink } from 'react-router-dom';
import '../appHeader/appHeader.css'

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <NavLink  to="/">
                    <span>PokeDex</span> 
                </NavLink >
            </h1>
            <nav className="app__menu">
                <ul>
                <NavLink to="/catch/:id">Catch</NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;