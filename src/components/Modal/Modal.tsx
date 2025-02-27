import { FC } from "react"
import s from './Modal.module.scss'


interface IProps {
    close: () => void;
    logout: () => void;
}

const Modal:FC<IProps> = ({close, logout}) => {
  return (
    <>
        <div className={s.modal} onClick={close}>
            <div className={s.modal__block} onClick={(event) => event.stopPropagation()}>
                <h2 className={s.modal__block_title}>Подтвердить выход</h2>
                <div className={s.modal__block_btns}>
                    <button onClick={logout} className={s.modal__block_btn}>Да</button>
                    <button onClick={close} className={s.modal__block_btn}>Нет</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Modal