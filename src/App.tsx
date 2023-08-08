import Header from "./components/Header/Header.tsx";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home.tsx"
import NotFound from "./pages/NotFound/NotFound.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
