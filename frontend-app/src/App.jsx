import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense } from "react"
import { LoginPage, RegisterPage } from "./features/authentication"
import { HomePage } from "./features/home"
import { NotFoundPage } from "./features/error"
import LoadingPage from "./components/loading/LoadingPage"
import { ProductDetail } from "./features/product"


function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route  path="/*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route exact path="/:productSlug" element={<ProductDetail />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
