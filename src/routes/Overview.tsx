import Header from '../components/Header';
import {Container,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function Overview() {
  const navigate = useNavigate();
  return (<div>
    <Header/>
    <Container className='d-flex flex-column my-5 py-5' style={{width:'300px'}}>
      <Button className='py-3 px-5 border m-1 shadow' variant='light' onClick={()=>navigate("/material")}>
      <i className='fas fa-angle-right h5 px-2'></i> <span className='h5'>Material</span></Button>
      <Button className='py-3 px-5 border m-1 shadow' variant='light' onClick={()=>navigate('/freight')}>
      <i className='fas fa-angle-right h5 px-2'></i> <span className='h5'>Freight</span></Button>
      <Button className='py-3 px-5 border m-1 shadow' variant='light' onClick={()=>navigate('/machine')}>
      <i className='fas fa-angle-right h5 px-2'></i> <span className='h5'>Machines</span></Button>
    </Container>
  </div>
  );
}

export default Overview;