import React from 'react'
import globalStyle from './GlobalStyle'
import { Global } from '@emotion/react';
import { ContextWrapper } from './context/ContextWrapper';


function App() {
  return (
    <ContextWrapper>
    <div className="App">
      <Global styles={globalStyle}/> 
    </div>
    </ContextWrapper>
  );
}

export default App;
