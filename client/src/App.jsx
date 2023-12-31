import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './context/AuthContext';

 
function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
          <Routes>
             <Route path='/' element={<h1>Home page</h1>} />
             <Route path='/login' element={<LoginPage/>} />
             <Route path='/register' element={<RegisterPage/>} />
             <Route path='/tasks' element={<h1>Tasks page</h1>} />
             <Route path='/add-task' element={<h1>New task</h1>} />
             <Route path='/tasks/:add' element={<h1>Update task</h1>} />
             <Route path='/profile' element={<h1>Profile</h1>} />
          </Routes>
       </BrowserRouter>
    </AuthProvider>
      
    
       
    </>
  )
}

export default App
