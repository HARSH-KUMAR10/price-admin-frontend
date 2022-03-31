import Header from '../components/Header';
import {Container,Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

export function ListMachines() {
  const navigate=useNavigate()
  return (
    <div>
    <Header/>
    <div className="display-6 text-center p-3">Machines</div>
    <Container className='d-flex flex-column my-4 py-4' style={{maxWidth:500}}>
      <Button className='py-3 px-5 border m-1 shadow' variant='light'>
      <i className='fas fa-angle-right h5 px-2'></i> <span className='h5'>Machine 1</span>
      </Button>
      <Button className='py-3 px-5 border m-1 shadow' variant='light'>
      <i className='fas fa-angle-right h5 px-2'></i> <span className='h5'>Machine 2</span>
      </Button>
      <div className="mt-3"><Button variant="light" className='border shadow' onClick={()=>navigate('/overview')}>back</Button></div>
    </Container>
  </div>
  );
}

export default ListMachines;