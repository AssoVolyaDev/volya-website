import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Footer from './gui/components/footer'
import Navbar from './gui/components/navbar'

import Contact from './gui/screens/Contact';
import Home from './gui/screens/Home';
import LegalNotices from './gui/screens/LegalNotices';
import CGU from './gui/screens/CGU';
import FAQ from './gui/screens/FAQ';

import { GlobalStyles } from './style/global'
import { theme } from './style/theme'

const App: React.VoidFunctionComponent = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyles />

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mentions-legales" element={<LegalNotices />} />
            <Route path="/cgu" element={<CGU />} />
            {/* TODO obligatoire <Route path="/confidentialite" element={<PrivacyPolicy />} /> */}
            {/* TODO obligatoire (redirection à partir de PrivacyPolicy) <Route path="/cookies" element={<Cookies />} /> */}
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
