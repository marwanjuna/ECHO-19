import React from "react";
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home/Home";
import DetailCountry from "./components/Search/DetailCountry";
import Search from "./components/Search/Search"
import { Nav, Navbar } from 'react-bootstrap'
import globe from "./assets/globe.png";
import loupe from "./assets/loupe.png";
import Footer from "./components/Home/Footer";

//Theme dark-light
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from './styles/globalStyle'
import useDarkMode from './styles/useDarkMode';
import Button from "./components/Setting/Button";

function App() {
  const [theme, buttonTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const LogoNavbar = styled.img`
    margin: 5px;
    height: 44px;
    width: 44px;
    cursor: pointer;
    background-color: transparent;
  `;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <Router>
          <GlobalStyles />
          <header>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
              <div>
                <Link to="/"><LogoNavbar src={globe} /></Link>
              </div>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                  <div>
                    <Link to="/search"><LogoNavbar src={loupe} /></Link>
                  </div>
                </Nav>
                <div >
                  <Button theme={theme} buttonTheme={buttonTheme} />
                </div>
              </Navbar.Collapse>
            </Navbar>


            <div>
              <Switch>
                <Route path="/search">
                  <Search />
                </Route>
                <Route path="/detail">
                  <DetailCountry />
                </Route>
                <Route path="/" exact={true}>
                  <Home />
                </Route>
              </Switch>
            </div>
          </header>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
