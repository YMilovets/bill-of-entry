import React, {useContext} from 'react'
import Context from '../contexts/context';
import { Link, Redirect } from "react-router-dom"

export default function FormConfirm() {
    const {regStatus, setRegStatus, activeStatus, setActiveStatus} = useContext(Context);
    const onSend = (e) => {
        e.preventDefault();
        setRegStatus(false);
        setActiveStatus(true);
    }
    if (!regStatus && activeStatus) return <Redirect to="/active" />
    else if (!regStatus) {
        return (
            <Redirect to="/" />
        );
    }
    
    return (
        <div className="form-bill">
            <div className="form-bill__logo form-bill__logo--letter"></div>
            <h1 className="form-bill__header m-form-header">Подтверждение</h1>
            <p className="form-bill__text m-form-text">На Ваш электронный адрес был выслан код,<br />введите его ниже</p>
            <form onSubmit={onSend} className="form-bill__wrap">
                <label>
                    <input maxLength="1" type="text" className="form-bill__number" />
                    <input maxLength="1" type="text" className="form-bill__number" />
                    <input maxLength="1" type="text" className="form-bill__number" />
                    <input maxLength="1" type="text" className="form-bill__number" />
                </label>
                <button className="form-bill__send--confirm form-bill__send">Продолжить</button>
                <Link className="form-bill__link" to="#">Выслать код повторно</Link>
            </form>
        </div>
    )
}
