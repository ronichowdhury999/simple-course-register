import './App.css'
import Cards from './components/courses/cards'
import Header from './components/header/header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <Header></Header>
      <Cards></Cards>
      <ToastContainer />
    </>
  )
}

export default App
