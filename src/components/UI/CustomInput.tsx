import { FC } from "react"
import { FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from "react-hook-form";


interface IProps {
    type: string;
    text: string;
    placeholder: string;
    register:  UseFormRegisterReturn;
    errors: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

const CustomInput:FC<IProps> = ({type, text,placeholder, register, errors}) => {
  return (
   <>
    <div className="formlayout__block-item">
        <span className="formlayout__block-item-span">{text}</span>
        <input 
            type={type}
            className="formlayout__block-item-input"
            placeholder={placeholder}
            {...register}
        />
        {errors && <h3 className="formlayout__block-item-error">{errors?.message}</h3> }
    </div>
   </>
  )
}

export default CustomInput