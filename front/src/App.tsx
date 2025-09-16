
import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/app-router';

function App() {
  return (
    <BrowserRouter>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="/">Delivery flowers</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/shops">Shops</Nav.Link>
                  <Nav.Link href="/cart">Cart</Nav.Link>
                  <Nav.Link href="/history">History</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <AppRouter /></BrowserRouter>
  );
}

export default App;
