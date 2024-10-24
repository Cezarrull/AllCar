import style from './Header.module.css'
import { Link } from 'react-router-dom';

export function Header() {
    return(
        <div className={style.header}>
            <a href="#" className={style.nameTheme}>AllCar</a>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Contato">Contato</Link>
                </li>
                <li>
                    <Link to="/Sobre">Sobre</Link>
                </li>
            </ul>
        </div>
    )
}