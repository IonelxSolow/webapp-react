import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>

        <Route path="/" Component={HomePage} />
        <Route path="/movie/:id" Component={MovieDetailPage} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
