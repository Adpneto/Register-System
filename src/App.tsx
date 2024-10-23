import { Button } from "./components/ui/button"
import Login from "./pages/login"
import { Register } from "./pages/register"
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <div>
      <Link to={'/'}>
        <Button>Register</Button>
      </Link>
      <Link to={'/login'}>
        <Button>Login</Button>
      </Link>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
