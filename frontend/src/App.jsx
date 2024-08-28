
import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Error from './pages/Error'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Search from './pages/SearchPage'
import Profile from './pages/Profile'
import AddNote from './pages/AddNote'
import SingleNotePage from './pages/SingleNote'
import EditNote from './pages/EditNote'
function App() {

    return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />

      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/addNewNote" element= {<AddNote/>}/>
      <Route path='/singleNotePage/:id' element={<SingleNotePage />} />
      <Route path='/editNote/:id' element={<EditNote />} />
      <Route path="*" element={<Error/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
