import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense } from "react"
import { LoginPage, RegisterPage } from "./features/authentication"
import { HomePage } from "./features/home"
import { NotFoundPage } from "./features/error"
import LoadingPage from "./components/loading/LoadingPage"
import { ProductPage, ProductDetailPage, ProductRekomenPage } from "./features/product"


function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} exact/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search" element={<ProductPage />} />
          <Route path="/:shopeSlug/:productSlug" element={<ProductDetailPage />} />
          <Route path="/rekomendasi" element={<ProductRekomenPage />} />
          <Route  path="/*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
