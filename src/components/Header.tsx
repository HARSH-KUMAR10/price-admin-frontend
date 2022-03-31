import { Navbar,Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import {useNavigate} from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  return (
    <Navbar bg="white" expand="lg" className='border-bottom'>
      <Image src={require('../assets/logo.JPG')}/>
      <Button variant="dark" className='ms-auto' onClick={()=>navigate('/')}>Logout</Button>
    </Navbar>
  );
}

export default Header;