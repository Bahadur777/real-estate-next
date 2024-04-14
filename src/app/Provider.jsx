import React from 'react'
import Header from '../components/Header'

const Provider = ({children}) => {
  return (
    <div>
        <Header></Header>
        {children}
    </div>
  )
}

export default Provider