import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={
            <ProtectedRoute>
              <Gallery />
            </ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App