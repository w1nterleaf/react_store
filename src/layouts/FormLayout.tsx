import { FC, ReactNode } from "react"
import { logoIcon } from "../utils/img"

interface IProps {
    children: ReactNode
}

const FormLayout:FC<IProps> = ({ children }) => {
  return (
    <>
        <div className="formlayout">
            <div className="formlayout__left">
                <img src={logoIcon} alt="" className="formlayout__left-img" />
            </div>
            <div className="formlayout__right">
                {children}
            </div>
        </div>
    </>
  )
}

export default FormLayout