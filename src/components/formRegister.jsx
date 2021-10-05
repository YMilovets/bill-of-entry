import React, {useContext, useRef, useState} from 'react'
import Context from '../contexts/context';
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom"
import Messages from './messages';

export default function FormRegister() {
    const emailField = useRef();
    const {regStatus, setRegStatus} = useContext(Context);
    const [alert, setAlert] = useState(false);
    const onSend = (e) => {
        e.preventDefault();
        const regex = new RegExp(/.+@.+\..+/i);
        const value = emailField.current.value;
        
        if (regex.test(value)) {
            setRegStatus(true);
            setAlert(false);
        }
        else {
            setAlert(true);
            emailField.current.focus();
        }
    }
    const onChange = () => {
        setAlert(false);
    }
    if (regStatus) {
        return <Redirect to="/confirm" />
    }
    return (
        <div className="form-bill">
            {alert ? <Messages>Введите корректный адрес электронной почты</Messages> : ""}
            <div className="form-bill__logo form-bill__logo--letter"></div>
            <h1 className="form-bill__header m-form-header">Без регистрации</h1>
            <p className="form-bill__text m-form-text">Введите адрес электронной почты</p>
            <form onSubmit={onSend} className="form-bill__wrap form-bill__wrap--reg m-form-bill__wrap--reg">
                <label className="form-bill__email-label">
                    <input ref={emailField} 
                        placeholder="Введите email" 
                        type="text" 
                        className="form-bill__email"
                        onChange={onChange} />
                </label>
                <button className="form-bill__send--reg form-bill__send">Продолжить</button>
                <div className="form-bill__other-auth">
                    <Link className="form-bill__link" to="#">Вход через Госуслуги</Link>
                </div>
            </form>
        </div>
    )
}
