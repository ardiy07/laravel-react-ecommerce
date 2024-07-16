import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense } from "react"
import { LoginPage, RegisterPage } from "./features/authentication"
import { HomePage } from "./features/home"
import { NotFoundPage } from "./features/error"
import LoadingPage from "./components/loading/LoadingPage"
import { Product, ProductDetail } from "./features/product"


function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search" element={<Product />} />
          <Route exact path="/:shopeSlug/:productSlug" element={<ProductDetail />} />
          <Route  path="/*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
