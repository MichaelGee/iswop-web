import { Button } from './components/atoms/Button';
import globalStyle from './GlobalStyle'
import { Global } from '@emotion/core';

function App() {
  return (
    <div className="App">
      {/* <h1 className='text-5xl font-bold text-violet-700'>Hello</h1>
      <button type="button" class="bg-gray-100 text-violet-700 text-base font-semibold px-6 py-2 rounded-lg">Check availability</button> */}
      <Global styles={globalStyle}/>

      <Button/>
    </div>
  );
}

export default App;
