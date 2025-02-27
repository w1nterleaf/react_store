import React, { FC } from 'react'
import { useParams } from "react-router-dom"
import { getProductById } from "../../services/product"
import s from './ProductById.module.scss'

const ProductById: FC = () => {
    
    const params = useParams()
    
    const { data } = getProductById(Number(params.id))
    
    console.log(data);
    
    
  return (
    <div>ProductById</div>
  )
}

export default ProductById