import { Button } from './components/atoms/Button';
import globalStyle from './GlobalStyle'
import { Global } from '@emotion/core';

function App() {
  return (
    <div className="App">
    
      <Global styles={globalStyle}/>

      
    </div>
  );
}

export default App;
