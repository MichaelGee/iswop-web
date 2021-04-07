import React from 'react';
import '../src/style/main.css'
import { Global, ThemeProvider } from '@emotion/react';
import globalStyle from '../src/GlobalStyle'
import { theme } from '../src/theme';


const ThemeDecorator = storyFn => (
      <ThemeProvider theme={theme}>
      <div className="px-20 py-10 flex justify-center items-center">
         <Global styles={globalStyle}/>
        {storyFn()}
      </div>
      </ThemeProvider>
)
  
  export default ThemeDecorator;




