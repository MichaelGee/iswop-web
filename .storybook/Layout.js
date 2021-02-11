import React from 'react';
import '../src/style/main.css'
import { Global } from '@emotion/react';
import globalStyle from '../src/GlobalStyle'

const Layout = ({ children }) => {
    return (
      <div className="px-20 py-10 flex justify-center items-center">
         <Global styles={globalStyle}/>
        {children}
      </div>
    )
  }
  
  export default Layout;