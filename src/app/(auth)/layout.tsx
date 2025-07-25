import React from 'react'
// It defines a React component named Layout that:
//     Takes one prop called children
//     Ensures that children must be a valid React element or elements (JSX)
const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <main className='auth'>{children}</main>
  )
}

export default Layout
