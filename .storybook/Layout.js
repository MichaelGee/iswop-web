import React from 'react';
import '../src/style/main.css'
import { Global } from '@emotion/core';
import globalStyle from '../src/GlobalStyle'

const Layout = ({ children }) => {
    return (
      <div className="px-20 py-10">
         <Global styles={globalStyle}/>
        {children}
      </div>
    )
  }
  
  export default Layout;