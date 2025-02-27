import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { userStore } from "../../store/userStore"
import { userPhoto, menuIcon, cartIcon, userIcon, logoutIcon } from "../../utils/img"
import Modal from "../Modal/Modal"
import CustomBtn from "../UI/CustomBtn"
import s from './Sidebar.module.scss'
import Skeleton from "./Skeleton"


let links = [
    { url: '/', name: 'Меню', icon: menuIcon },
    { url: '/cart', name: 'Корзина', icon: cartIcon },
    { url: '/profile', name: 'Профиль', icon: userIcon },
]
let url = 'https://prowebapi.pythonanywhere.com'

const Sidebar = () => {
    
    const { user, logoutUser } = userStore(state => state)
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()
    
    const openModal = () => {
        setShowModal(true)
    }
    
    const closeModal = () => {
        setShowModal(false)
    }
    
    const logout = () => {
        setShowModal(false)
        logoutUser()
        navigate('/login')
    }
    
    
  return (
    <>
        <div className={s.sidebar}>
            {user ? (
                <>
                    <div className={s.sidebar__user}>
                        {!user.avatar && <img src={userPhoto} alt="" className={s.sidebar__user_img} />}
                        {user.avatar &&  <img src={`${url}${user.avatar}`} alt="" className={s.sidebar__user_img} />}
                        <h2 className={s.sidebar__user_name}>{user.username}</h2>
                        <a href={`mailto:${user.email}`} className={s.sidebar__user_email}>{user.email}</a>
                    </div>
                    <ul className={s.sidebar__list}>
                        {links.map((link,i) => (
                            <li key={i}>
                                <Link to={link.url} className={s.sidebar__list_link}>
                                    <img src={link.icon} alt="" />
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <CustomBtn
                        onClick={openModal}
                        text="Выйти"
                        width={117}
                        height={43}
                        icon={logoutIcon}
                        mt="auto"
                    />
                </>
            ) : <Skeleton/> }
           
        </div>
        {showModal &&  <Modal close={closeModal} logout={logout}/>}
    </>
  )
}

export default Sidebar