import React from 'react'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/global'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Sidebar } from "./components/Algorithm/Algorithm";
import 'react-toastify/dist/ReactToastify.css'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
