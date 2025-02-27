import { FC } from "react"
import Products from "../components/Products/Products"
import MainLayout from "../layouts/MainLayout"


const Home:FC = () => {
  return (
    <MainLayout>
      <Products/>
    </MainLayout>
  )
}

export default Home