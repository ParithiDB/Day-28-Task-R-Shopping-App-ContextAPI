import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Header({brandName = '', brandLogo = '', count = ''}) {

    

  return (
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={brandLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            {brandName}
          </Navbar.Brand>
         
      

      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link>
             <Link to='/' className='me-2'>Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to='/cart'>Cart</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
        </Container>
      </Navbar>
  );
}

export default Header;