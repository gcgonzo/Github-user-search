import React from "react"
import ContentLoader from "react-content-loader"

const InfoLoader = () => (
  <ContentLoader 
    speed={2}
    width={800}
    height={280}
    viewBox="0 0 800 280"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="0" rx="0" ry="0" width="800" height="280" />
  </ContentLoader>
)

export default InfoLoader