import React from 'react';
import '../src/style/main.css'

const Layout = ({ children }) => {
  return (
    <div className="px-20 py-10">
      {children}
    </div>
  )
}

export default Layout;