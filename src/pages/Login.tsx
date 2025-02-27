import { FC, useState } from "react"
import FormLayout from "../layouts/FormLayout"
import { useForm } from "react-hook-form"
import CustomInput from "../components/UI/CustomInput"
import CustomBtn from "../components/UI/CustomBtn"
import { Link, useNavigate } from "react-router-dom"
import { ILogin } from "../types"
import { loginUser } from "../services/auth"
import { errorMessage } from "../utils/error"


const Login:FC = () => {
  
  const { mutateAsync } = loginUser()
  const [errorText, setErrorText] = useState('')
  const navigate = useNavigate()
  
  
  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
      isValid
    }
  } = useForm<ILogin>({
    mode: 'onBlur'
  })

  
  const submit = async(data:ILogin) => {
    try {
        await mutateAsync(data)
        setErrorText('')
        navigate('/')
    } catch (error) {
      console.log(error);
      setErrorText(errorMessage(error, 'login'))
    }
    
  }
  
  
  return (
    <>
      <FormLayout>
        <div className="formlayout__block">
          <h2 className="formlayout__block-title">Вход</h2>
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
              type="password"
              placeholder="Пароль"
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
            <CustomBtn
              text="Вход"
              width={248}
              height={60}
              mauto="auto"
              disabled={!isValid}
            />
          </form>
          <div className="formlayout__block-info">
            {errorText &&  <p className="formlayout__block-error">{errorText}</p> }
            <p className="formlayout__block-text">Нет акканута?</p>
            <Link to="/register" className="formlayout__block-link">Зарегистрироваться</Link>
          </div>
        </div>
      </FormLayout>
    </>
  )
}

export default Login