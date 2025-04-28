import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// 페이지 컴포넌트를 Lazy Loading으로 임포트
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail.jsx"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound.jsx")); // 404 페이지 추가

// 공통 컴포넌트 임포트
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";

// 스크롤 복원 컴포넌트
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // 부드러운 스크롤 추가
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL || "/"}>
      {" "}
      {/* Vite의 base URL 동적 설정 */}
      <ScrollToTop /> {/* Router 내부에 배치 */}
      <div className="app">
        <Header />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            {" "}
            {/* Lazy Loading 대기 UI */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} /> {/* 404 페이지 */}
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
