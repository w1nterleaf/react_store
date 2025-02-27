import { FC, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { getAllProducts } from "../../services/product"
import { filterStore } from "../../store/filterStore"
import { IProduct } from "../../types"
import Pagination from "../Pagination/Pagination"
import Search from "../Search/Search"
import Sort from "../Sort/Sort"
import ProductItem from "./ProductItem"
import s from './Products.module.scss'
import Skeleton from "./Skeleton"

const Products:FC = () => {
    
  
    const navigate = useNavigate()
    const location = useLocation()
    const { 
      sortValue, 
      searchValue, 
      setSortValue, 
      setSearchValue,
      limit,
      currentPage,
      offset,
      setOffset,
      setCurrentPage
    } = filterStore(state => state)
    const { data } = getAllProducts({ sortValue, searchValue,limit,offset })
    
    const products = data && data.results.map((item:IProduct) => <ProductItem key={item.id} {...item}/>)
    const skeleton = [...new Array(9)].map((_,i) => <Skeleton key={i}/>)
    
    
    useEffect(() => {
      
      const params = new URLSearchParams(location.search)
      setSortValue(params.get('ordering') || '')
      setSearchValue(params.get('search') || '')
      setCurrentPage(Number(params.get('page')) || 1)

    }, [location.search])
    
    
    useEffect(() => {
      
      setOffset(currentPage * limit - limit)
      
      const params = new URLSearchParams()
      
      sortValue && params.set('ordering', sortValue)
      searchValue && params.set('search', searchValue)
      currentPage != 1 && params.set('page', String(currentPage))
      
      navigate(`?${decodeURIComponent(params.toString())}`)
      
    }, [sortValue, searchValue, currentPage])
    
    
    const changePage = (num: number) => {
      setCurrentPage(num)
      setOffset(num * limit - limit)
    }
     
  return (
    <>
        <div className={s.products}>
            <div className={s.products__filter}>
                <Sort/>
                <Search/>
            </div>
            <div className={s.products__list}>
               {data ? products : skeleton}
            </div>
            {data && data.count == 0 && (
              <h2 style={{textAlign: "center"}}>
                Товары по запросу - {searchValue} не найдены
              </h2>
            )}
            {data && data.count > 6 &&
              <Pagination
                limit={limit}
                currentPage={currentPage}
                totalCount={data.count}
                changePage={changePage}
              />
            }
            
        </div>
    </>
  )
}

export default Products