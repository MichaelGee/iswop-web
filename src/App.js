import { Button } from './components/atoms/Button';


function App() {
  return (
    <div className="App">
      <h1 className='text-5xl font-bold text-violet-700'>Hello</h1>
      <button type="button" class="bg-gray-100 text-violet-700 text-base font-semibold px-6 py-2 rounded-lg">Check availability</button>

      <Button/>
    </div>
  );
}

export default App;
