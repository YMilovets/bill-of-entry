import React, {useContext} from 'react'
import Context from '../contexts/context';
import { Redirect } from 'react-router-dom';

export default function FormActivated() {
    const {activeStatus, setActiveStatus} = useContext(Context);
    const onSend = (e) => {
        e.preventDefault();
        setActiveStatus(false);
    }
    if (!activeStatus)
        return <Redirect to="/" />
    return (
        <div className="form-bill">
            <div className="form-bill__logo form-bill__logo--activate"></div>
            <form className="form-bill__wrap form-bill__wrap--active m-form-bill__wrap--active">
                <h1 className="form-bill__header m-form-header">Почта подтверждена!</h1>
                <p className="form-bill__text m-form-text text-confirm">На Ваш электронный адрес выслан бланк пассажирской таможенной декларации и штрих-код для доступа к быстрой печати с сенсорного терминала</p>
                <button onClick={onSend} className="form-bill__send--active form-bill__send">Вернуться</button>
            </form>
            
        </div>
    );
}
