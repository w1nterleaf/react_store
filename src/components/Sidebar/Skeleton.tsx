import React, { FC } from 'react'
import ContentLoader from "react-content-loader"

const Skeleton:FC = () => {
  return (
    <ContentLoader 
    speed={1}
    width={300}
    height={420}
    viewBox="0 0 300 420"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="45" cy="45" r="45" /> 
    <rect x="0" y="110" rx="0" ry="0" width="90" height="22" /> 
    <rect x="0" y="140" rx="0" ry="0" width="140" height="20" /> 
    <rect x="0" y="213" rx="0" ry="0" width="120" height="26" /> 
    <rect x="0" y="265" rx="0" ry="0" width="120" height="26" /> 
    <rect x="0" y="320" rx="0" ry="0" width="120" height="26" />
  </ContentLoader>
  )
}

export default Skeleton