import Header from "./components/Header/Header.tsx";
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home.tsx"
import NotFound from "./pages/NotFound/NotFound.tsx";
import NewArrivals from "./pages/NewArrivals/NewArrivals.tsx";

function App() {
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path='*' element={<NotFound/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/newarrivals" element={<NewArrivals/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
