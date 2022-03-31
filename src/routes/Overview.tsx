import Header from '../components/Header';
import {Container,Button} from 'react-bootstrap';

export function Overview() {
  return (<div>
    <Header/>
    <Container className='d-flex flex-column my-5 py-5 w-25'>
      <Button className='py-3 px-5 border m-1 shadow' variant='light'>
      <i className='fas fa-angle-right h5 px-2'></i> <span className='h5'>Material</span></Button>
      <Button className='py-3 px-5 border m-1 shadow' variant='light'>
      <i className='fas fa-angle-right h5 px-2'></i> <span className='h5'>Freight</span></Button>
      <Button className='py-3 px-5 border m-1 shadow' variant='light'>
      <i className='fas fa-angle-right h5 px-2'></i> <span className='h5'>Machines</span></Button>
    </Container>
  </div>
  );
}

export default Overview;