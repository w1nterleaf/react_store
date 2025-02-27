import { FC, useEffect, useState } from "react"
import s from './Sort.module.scss'
import Select, { StylesConfig } from 'react-select'
import { filterStore } from "../../store/filterStore"
import { useLocation } from "react-router-dom"

const options = [
  { value: '', label: 'Все товары' },
  { value: 'title', label: 'По названию' },
  { value: 'price', label: 'По цене' },
  { value: 'rating', label: 'По рейтингу' }
]



const Sort:FC = () => {
  
  const { setSortValue, setCurrentPage  } = filterStore(state => state)
  const [selectedOption, setSelectedOption] = useState('')
  const location = useLocation()
  
  const changeSort = (option:any) => {
    setSortValue(option.value)
    setSelectedOption(option)
    setCurrentPage(1)
  }
  
  useEffect(() => {
    
    const params = new URLSearchParams(location.search)
    const value = params.get('ordering')
    const obj = options.find((item) => item.value == value)
    setSelectedOption(obj)
  },[location.search])
  
  
  const styles:StylesConfig = {
    control: (param) => ({
      ...param,
      border: '1px solid #efefef',
      borderRadius: '10px',
      width: '187px',
      height: '37px',
      fontSize: '14px'
    })
  }
  
  
  return (
    <>
      <div className={s.sort}>
        <h1 className={s.sort__title}>Меню</h1>
        <Select
          value={selectedOption}
          options={options}
          placeholder="Сортировать по:"
          styles={styles}
          onChange={changeSort}
        />
      </div>
    </>
  )
}

export default Sort