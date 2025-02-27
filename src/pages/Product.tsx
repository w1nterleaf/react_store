import { FC } from "react"
import ProductById from "../components/ProductById/ProductById"
import MainLayout from "../layouts/MainLayout"


const Product:FC = () => {
  return (
    <MainLayout>
      <ProductById/>
    </MainLayout>
  )
}

export default Product