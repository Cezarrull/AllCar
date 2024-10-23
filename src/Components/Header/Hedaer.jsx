import style from './Header.module.css'

export function Header() {
    return(
        <div className={style.header}>
            <a href="#" className={style.nameTheme}>AllCar</a>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/Contato">Contato</a>
                </li>
                <li>
                    <a href="/sobre">Sobre</a>
                </li>
            </ul>
        </div>
    )
}