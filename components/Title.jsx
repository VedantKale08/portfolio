import React from 'react'

const Title = ({children,className}) => {
  return <p className={`md:text-2xl text-lg ${className}`}>{children}</p>;
}

export default Title