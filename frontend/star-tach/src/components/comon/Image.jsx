import React from 'react'

const Image = ({className,src,alt}) => {
  return (
    <img className={`w-full ${className}`} src={src} alt={alt}/>
  )
}

export default Image