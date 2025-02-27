import { FC } from "react"
import s from './Custom.module.scss'


interface IProps {
    text: string;
    width: number;
    height: number;
    mauto?: string;
    icon?: string;
    disabled?: boolean;
    mt?: string;
    onClick?: () => void;
}

const CustomBtn:FC<IProps> = ({text,disabled,mt, width,height, mauto, icon, onClick}) => {
  return (
   <>
    <button
        onClick={onClick} 
        className={s.btn}
        disabled={disabled}
        style={{
            maxWidth: width,
            height: height,
            marginLeft: mauto,
            marginRight: mauto,
            marginTop: mt
        }}
    >
        {icon && <img src={icon} alt="" /> }
        {text}
    </button>
   </>
  )
}

export default CustomBtn