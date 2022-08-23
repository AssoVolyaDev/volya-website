import React, { ReactElement, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LogoImg from '../../assets/images/logo.png';
import LocaleContext from '../../LocaleContext';
import i18n from '../../i18n';

const VolyaNavbar = (): ReactElement => {
  const { t } = useTranslation();

  const { locale } = useContext(LocaleContext);

  const changeLocale = (l: string): void => {
    if (locale !== l) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      i18n.changeLanguage(l);
    }
  };

  return (
    <Navbar sticky="top" expand="lg" style={{ backgroundColor: 'white' }}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={LogoImg}
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="Volya logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                // TODO Ajouter une loupe
                placeholder={t('menu.search.placeholder')}
                className="me-2"
                aria-label="Search"
              />
            </Form> */}
            <Nav.Link href="/">{t('menu.home')}</Nav.Link>
            {/* <Nav.Link href="/">{t('menu.home')}</Nav.Link> */}
            {/* <Nav.Link href="/association">{t('menu.association')}</Nav.Link> */}
            {/* <Nav.Link href="/projets">{t('menu.projects')}</Nav.Link> */}
            <Nav.Link href="/contact">{t('menu.contact')}</Nav.Link>
            {/* <Nav.Link href="/blog">{t('menu.blog')}</Nav.Link> */}
            <NavDropdown
              title={t(`menu.locale.${locale.split('-')[0]}`)}
              id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => changeLocale('fr')}>Français</NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLocale('uk')}>Yкраїнська</NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLocale('en')}>English</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default VolyaNavbar;
