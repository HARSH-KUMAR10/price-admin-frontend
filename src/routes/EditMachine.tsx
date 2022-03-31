import Header from '../components/Header';
import { Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Machine from '../components/Machine';

export function EditMachine() {
  const navigate = useNavigate();
  return (
    <>
    <Header/>
    <div className="mx-auto container" style={{maxWidth:1000}}>
    <div className="display-6 text-center p-3">Edit Machine</div>

    <div className=" border p-2 mx-auto">
      <div className="row align-items-baseline">
        <span className="col-10 h3 text-left">Machine 2</span>
        <i className="fa fa-plus-circle col-2" style={{fontSize:'24px'}}></i>
      </div>
    <div className="mt-3 border p-2">
      <Machine mini={0} maxi={0} prices={0} exchas={0} color0={0} color1={0} color2={0}/>
    </div>

    <div className="mt-3 border p-2">
      <Machine mini={0} maxi={0} prices={0} exchas={0} color0={0} color1={0} color2={0}/>
    </div>

    </div>
    <div className='d-flex flex-row p-2'>
      <Button onClick={()=>navigate('/machine')} variant="light" className='border shadow' >back</Button>
    </div>

    </div>
    </>
  );
}

export default EditMachine;