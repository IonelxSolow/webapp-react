import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import LoginPage from './pages/auth/LoginPage.jsx'
import RegisterPage from './pages/auth/RegisterPage.jsx'
import NotFound from './pages/NotFound.jsx'
import GlobalContext from './contexts/GlobalContext.jsx'


function App() {
  
  const [isLoading, setIsLoading] = useState(false)

  return (
    <GlobalContext.Provider value={{isLoading, setIsLoading}}>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/movie/:id" Component={MovieDetailPage} />

            <Route path="/*" Component={NotFound} />


            {/* Auth routes */}
              <Route path="/login" Component={LoginPage} />
              <Route path="/register" Component={RegisterPage} />
 

          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App
