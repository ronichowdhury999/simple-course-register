import './App.css'
import Cards from './components/courses/cards'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className='max-w-[1700px] mx-auto'>
    <Navbar/>
      <Cards></Cards>
      <ToastContainer />
    </div>
  )
}

export default App
