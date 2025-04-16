import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout.jsx'
import HomePage from './pages/HomePage.jsx'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>

        <Route path="/" Component={HomePage} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
