import { Navbar,Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

export function Header() {
  return (
    <Navbar bg="white" expand="lg" className='border-bottom'>
      <Image src={require('../assets/logo.JPG')}/>
      <Button variant="dark" className='ms-auto'>Logout</Button>
    </Navbar>
  );
}

export default Header;