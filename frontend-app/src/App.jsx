import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import HomePage from "./features/home/pages/HomePage"
// import RegisterPage from "./features/authentication/pages/RegisterPage"
// import NotFoundPage from "./features/notFound/NotFoundPage"
// import LoginPage from "./features/authentication/pages/LoginPage"
// import MainTamplate from "./components/templates/MainTamplate"
import { Suspense } from "react"
import { LoginPage } from "./features/authentication"
import { HomePage } from "./features/home"
import { NotFoundPage } from "./features/notFound"


function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
