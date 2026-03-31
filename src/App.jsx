import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Login"
import Body from "./Body"

function App() {
  return (
    <div data-theme="dark" className="min-h-screen">
      <BrowserRouter basename="/">
       <Routes>
          <Route path="/" element={<Body />}>
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<h1>About</h1>} />
          </Route>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
