import './App.css'
import Navbar from './components/Navbar';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Tasks></Tasks>
    </div>
  );
}

export default App;
