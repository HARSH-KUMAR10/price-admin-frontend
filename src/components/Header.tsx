import { Navbar,Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { getApiConfiguration } from '../apiConfiguration';
import { LogoutApi } from '../api';
import { useNavigate } from 'react-router-dom';

export function Header() {

  const navigate = useNavigate()

    const handleLogout = () =>{
        const api = new LogoutApi(getApiConfiguration());
        
        api.logoutLogout().then(() => {
            navigate("/");
          }).catch((err) => {
            console.log(err)
          })
    }
    
  return (
    <Navbar bg="white" expand="lg" className='border-bottom'>
      <Image src={require('../assets/logo.JPG')}/>
      <Button variant="dark" className='ms-auto' onClick={handleLogout}>Logout</Button>
    </Navbar>
  );
}

export default Header;