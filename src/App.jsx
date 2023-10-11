import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Users from './Components/Users'
import CreateUser from './Components/CreateUser'
import UpdateUser from './Components/UpdateUser'
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Users/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>

        <Route path='/update' element={<UpdateUser/>}></Route>

      </Routes>
    </Router>
      
    </>
  )
}

export default App
