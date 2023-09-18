import './App.css';
import './Test2';
import Test2 from './Test2';
import Test3 from './Test3';
import Test4 from './Test4';
import Test5 from './Test5';

function App() {
  return (
    <div className="App">
      <div className='btn-group'>
        <button type="button" className='btn btn-primary'>Primary</button>
        <button type="button" className='btn btn-danger'>Danger</button>
        <button type="button" className='btn btn-warning'>Warning</button>
      </div>
      <Test2 />
      <Test4 />
      <Test5 />
    </div>
  );
}

export default App;
