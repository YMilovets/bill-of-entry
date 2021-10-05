import React, {useContext} from 'react'
import Context from '../contexts/context';

export default function ModalAlert() {
    const {setModalAlert} = useContext(Context)
    const onClose = () => {
        setModalAlert(false);
    }
    return (
        <div className="blackout">
            <div className="modal-window">
                <h1 className="modal-window__header">Ошибка</h1>
                <p className="modal-window__text">Введенный код неверный</p>
                <button onClick={onClose} className="modal-window__btn">Закрыть</button>
            </div>
        </div>
    )
}
