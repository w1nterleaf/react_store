import ContentLoader from "react-content-loader"


const Skeleton = () => {
  return (
    <ContentLoader 
    speed={1}
    width="100%"
    height="100%"
    viewBox="0 0 430 340"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="18" ry="18" width="430" height="220" /> 
    <rect x="0" y="250" rx="0" ry="0" width="120" height="25" /> 
    <rect x="0" y="290" rx="0" ry="0" width="250" height="25" />
  </ContentLoader>
  )
}

export default Skeleton