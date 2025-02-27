import { FC, useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import CustomBtn from "../components/UI/CustomBtn"
import CustomInput from "../components/UI/CustomInput"
import FormLayout from "../layouts/FormLayout"
import { registerUser } from "../services/auth"
import { IRegister } from "../types"
import { errorMessage } from "../utils/error"


const Register:FC = () => {
  
  const { mutateAsync } = registerUser()
  const [errorText, setErrorText] = useState('')
  const navigate = useNavigate()
    
  
  const { 
    register, 
    handleSubmit,
    watch,
    formState: {
      errors,
      isValid
    }
  } = useForm<IRegister>({
    mode: 'onBlur'
  })

  const password = watch('password')
  
  
  const submit = async(data:IRegister) => {
    
      try {
        await mutateAsync(data)
        setErrorText('')
        navigate('/login')
      } catch (error) {
        setErrorText(errorMessage(error))
        console.log(error); 
      }
    
  }
  
  
  return (
    <>
      <FormLayout>
        <div className="formlayout__block">
          <h2 className="formlayout__block-title">Регистрация</h2>
          <form onSubmit={handleSubmit(submit)}  className="formlayout__block-form">
            <CustomInput
              type="text"
              placeholder="Логин"
              text="Ваш логин"
              errors={errors?.username}
              register={register('username', {
                required: 'Поле обязательно для заполнения',
                minLength: {
                  value: 5,
                  message: 'Минимум 5 символов'
                }
              })}
            />
            <CustomInput
              type="email"
              placeholder="Почта"
              text="Вашa почта"
              errors={errors?.email}
              register={register('email', {
                required: 'Поле обязательно для заполнения'
              })}
            />
             <CustomInput
              type="password"
              placeholder="Ваш пароль"
              text="Ваш пароль"
              errors={errors?.password}
              register={register('password', {
                required: 'Поле обязательно для заполнения',
                minLength: {
                  value: 8,
                  message: 'Минимум 8 символов'
                }
              })}
            />
             <CustomInput
              type="password"
              placeholder="Повторите пароль"
              text="Повторите пароль"
              errors={errors?.password2}
              register={register('password2', {
                required: 'Поле обязательно для заполнения',
                validate:(value) => value == password || 'Пароли не совпадают',
                minLength: {
                  value: 8,
                  message: 'Минимум 8 символов'
                }
              })}
            />
            <CustomBtn
              text="Зарегистрироваться"
              width={248}
              height={60}
              mauto="auto"
              disabled={!isValid}
            />
          </form>
          <div className="formlayout__block-info">
            {errorText &&  <p className="formlayout__block-error">{errorText}</p> }
            <p className="formlayout__block-text">Есть акканут?</p>
            <Link to="/login" className="formlayout__block-link">Войти</Link>
          </div>
        </div>
      </FormLayout>
    </>
  )
  
}

export default Register