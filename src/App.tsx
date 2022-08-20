import React, { Suspense, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './gui/components/footer'
import Navbar from './gui/components/navbar'
import Loading from './gui/components/Loading'
import Contact from './gui/screens/Contact';
import Home from './gui/screens/Home';
import LegalNotices from './gui/screens/LegalNotices';
import CGU from './gui/screens/CGU';
import FAQ from './gui/screens/FAQ';
import { GlobalStyles } from './style/global'
import { theme } from './style/theme'

import i18n from './i18n';
import LocaleContext from './LocaleContext'

function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LocaleContext.Provider value={{ locale, setLocale }}>
          <Suspense fallback={<Loading />}>
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
          </Suspense>
        </LocaleContext.Provider>
      </ThemeProvider>
    </div >
  )
}

export default App
