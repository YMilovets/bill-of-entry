import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"

export default function Header() {
    const [active, setActive] = useState(false);
    const onCompactClick = () => {
        setActive(!active);
    }
    useEffect(() => {
        const height = document.querySelectorAll(".menu__item").length * 91 + 76;
        document.querySelector(":root").style.setProperty('--compact-menu-height', height + "px");
    }, [])
    return (
        <div className={`header ${active ? "header--active" : ""}`}>
            <nav className="menu m-menu">
                <li onClick={onCompactClick} className="menu__compact"></li>
                <li className="menu__logo"></li>
                <li className="menu__item"><Link className="menu__link" to="#">Электронный бланк ПТД</Link></li>
                <li className="menu__item"><Link className="menu__link" to="#">Памятка путешественника</Link></li>
                <li className="menu__item"><Link className="menu__link" to="#">Информация</Link></li>
                <li className="menu__item"><Link className="menu__link" to="#">Вопросы и поддержка</Link></li>
                <li className="menu__item"><Link className="menu__link" to="#">Личный кабинет</Link></li>
            </nav>
        </div>  
    )
}
