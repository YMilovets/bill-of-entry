import React, {useContext} from 'react'
import Context from '../contexts/context';
import { Link, Redirect } from "react-router-dom"

export default function FormConfirm(props) {
    const {regStatus, setRegStatus, activeStatus, setActiveStatus, modalAlert, setModalAlert} = useContext(Context);

    const onSend = (e) => {
        e.preventDefault();
        const numbers = document.querySelectorAll(".form-bill__number");
        const result = Array.prototype.map.call(numbers, number => number.value).join("");

        if (validate(result)) {
            setRegStatus(false);
            setActiveStatus(true);
        }
        else setModalAlert(true);
    }
    const onKeyPress = (e) => {
        e.preventDefault();
        if (+e.key >= 0 && +e.key <= 9) {
            e.target.value = e.key;
            if (e.target.nextSibling)
                e.target.nextSibling.focus();
        }
        else return;
    }
    const validate = (value) => {
        return value === "1234";
    }
    if (!regStatus && activeStatus) return <Redirect to="/active" />
    else if (!regStatus) {
        return (
            <Redirect to="/" />
        );
    }
    return (
        <>
            {modalAlert ? props.children : ""}
            <div className="form-bill">
                <div className="form-bill__logo form-bill__logo--letter"></div>
                <h1 className="form-bill__header m-form-header">Подтверждение</h1>
                <p className="form-bill__text m-form-text">На Ваш электронный адрес был выслан код,<br />введите его ниже</p>
                <form onSubmit={onSend} className="form-bill__wrap form-bill__wrap--confirm m-form-bill__wrap--confirm">
                    <label className="form-bill__label">
                        <input onKeyUp={onKeyPress} maxLength="1" type="text" className="form-bill__number" />
                        <input onKeyUp={onKeyPress} maxLength="1" type="text" className="form-bill__number" />
                        <input onKeyUp={onKeyPress} maxLength="1" type="text" className="form-bill__number" />
                        <input onKeyUp={onKeyPress} maxLength="1" type="text" className="form-bill__number" />
                    </label>
                    <button className="form-bill__send--confirm form-bill__send">Продолжить</button>
                    <Link className="form-bill__link" to="#">Выслать код повторно</Link>
                </form>
            </div>       
        </>

    )
}
