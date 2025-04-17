import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import NotFound from './pages/NotFound.jsx'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>

           <Route path="/" Component={HomePage} />
           <Route path="/movie/:id" Component={MovieDetailPage} />

           <Route path="/*" Component={NotFound}/>
  
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
