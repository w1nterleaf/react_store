import { Link } from "react-router-dom";
import { IProduct } from "../../types";
import { addCartIcon, starIcon } from "../../utils/img";
import s from './Products.module.scss'

const ProductItem = (item: IProduct) => {
    
    
  return (
    <>
        <Link to={`/product/${item.id}`} className={s.products__item}>
            <img src={item.image} alt="" className={s.products__item_img} />
            <span className={s.products__item_price}>{item.price}$</span>
            <button className={s.products__item_add}>
                <img src={addCartIcon} alt="" />
            </button>
            <div className={s.products__item_info}>
                <span className={s.products__item_rating}>
                    {item.rating}
                    <img src={starIcon} alt="" />
                </span>
                <h2 className={s.products__item_title}>{item.title}</h2>
                <p className={s.products__item_description}>{item.description}</p>
            </div>
        </Link>
    </>
  )
}

export default ProductItem