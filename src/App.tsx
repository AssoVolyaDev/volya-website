import React, { ReactElement, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './style/bootstrap.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './gui/components/footer';
import Navbar from './gui/components/navbar';
import Loading from './gui/components/Loading';

import Home from './gui/screens/Home';
import Association from './gui/screens/Association';
// import Projects from './gui/screens/Projects';
// import Contact from './gui/screens/Contact';
// import Blog from './gui/screens/Blog';

// import LegalNotices from './gui/screens/LegalNotices';
// import CGU from './gui/screens/CGU';
import { GlobalStyles } from './style/global';
import { theme } from './style/theme';

import i18n from './i18n';
import LocaleContext from './LocaleContext';

const App = (): ReactElement => {
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
                <Route path="/Association" element={<Association />} />
                {/* <Route path="/association" element={<Association />} /> */}
                {/* <Route path="/projets" element={<Projects />} /> */}
                {/* TODO : à remettre quand ça sera prêt */}
                {/* <Route path="/contact" element={<Contact />} /> */}
                {/* <Route path="/blog" element={<Blog />} /> */}

                {/* TODO : à remettre quand ça sera prêt */}
                {/* <Route path="/mentions-legales" element={<LegalNotices />} />
                <Route path="/cgu" element={<CGU />} /> */}
                {/* TODO obligatoire <Route path="/confidentialite" element={<PrivacyPolicy />} /> */}
                {/* TODO obligatoire (redirection à partir de PrivacyPolicy) <Route path="/cookies" element={<Cookies />} /> */}
              </Routes>
              <ToastContainer />
              <Footer />
            </BrowserRouter>
          </Suspense>
        </LocaleContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default App;
