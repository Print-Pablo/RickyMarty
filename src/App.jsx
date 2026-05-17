import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Characters from './pages/Characters'
import FilterBySpecies from './pages/FilterBySpecies'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing sin navbar */}
        <Route path="/" element={<Landing />} />

        {/* Rutas con navbar */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <main className="main-content">
                <Routes>
                  <Route path="/characters" element={<Characters />} />
                  <Route path="/filter"     element={<FilterBySpecies />} />
                  <Route path="*"           element={<ErrorPage />} />
                </Routes>
              </main>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
