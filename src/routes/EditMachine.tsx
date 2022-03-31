import Header from '../components/Header';
import { Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

export function EditMachine() {
  const navigate = useNavigate();
  return (
    <>
    <Header/>
    <div className="text-center mx-auto container" style={{maxWidth:1100}}>
    <div className="display-6 text-center p-3">Edit Machine</div>

    <div className="border p-2 mx-auto">
      <div className="d-flex flex-row justify-content-between align-items-center">
        <span className="h3 p-2">Machine 2</span>
        <i className="fa fa-plus-circle" style={{fontSize:'24px'}}></i>
      </div>
    <div className="mt-3 border p-2">
      <div className='row my-2 align-items-baseline'>
        <div className='col-5 d-flex flex-row justify-content-between'>
            <div>Min <input type="text" style={{width:'40%'}} /></div>
            <div>Price <input type="text" style={{width:'40%'}} /></div>
        </div>
        <div className='col-7 d-flex flex-row justify-content-between'>
            <div className='d-flex flex-row'>
            <div className='px-3'><input type="checkbox" /> Add Purchase Price</div>
            <div><input type="checkbox" /> Add Purchase Price</div>
            </div>
            <i className="fa fa-close text-danger" style={{fontSize:24}}></i>
        </div>
      </div>

      <div className='row my-2 align-items-baseline'>
        <div className='col-5 d-flex flex-row justify-content-between '>
            <div>Max <input type="text" style={{width:'40%'}} /></div>
            <div>Excha <input type="text" style={{width:'40%'}} /></div>
        </div>
        <div className='col-6 d-flex flex-row justify-content-between border p-1 mx-auto'>
            <div>0 Colours <input type="text" style={{width:'40%'}} /></div>
            <div>1 Colours <input type="text" style={{width:'40%'}} /></div>
            <div>2 Colours <input type="text" style={{width:'40%'}} /></div>
        </div>
      </div>
    </div>

    <div className="mt-3 border p-2">
      <div className='row my-2 align-items-baseline'>
        <div className='col-5 d-flex flex-row justify-content-between'>
            <div>Min <input type="text" style={{width:'40%'}} /></div>
            <div>Price <input type="text" style={{width:'40%'}} /></div>
        </div>
        <div className='col-7 d-flex flex-row justify-content-between'>
            <div className='d-flex flex-row'>
            <div className='px-3'><input type="checkbox" /> Add Purchase Price</div>
            <div><input type="checkbox" /> Add Purchase Price</div>
            </div>
            <i className="fa fa-close text-danger" style={{fontSize:24}}></i>
        </div>
      </div>

      <div className='row my-2 align-items-baseline'>
        <div className='col-5 d-flex flex-row justify-content-between '>
            <div>Max <input type="text" style={{width:'40%'}} /></div>
            <div>Excha <input type="text" style={{width:'40%'}} /></div>
        </div>
        <div className='col-7 d-flex flex-row justify-content-between border p-1 mx-auto'>
            <div>0 Colours <input type="text" style={{width:'40%'}} /></div>
            <div>1 Colours <input type="text" style={{width:'40%'}} /></div>
            <div>2 Colours <input type="text" style={{width:'40%'}} /></div>
        </div>
      </div>
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