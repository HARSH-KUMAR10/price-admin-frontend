import Header from "../components/Header";
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import Freight from '../components/Freight';


export function EditFreight() {
  const navigate = useNavigate();
  return (
    <>
        <Header/>
        <div className="text-center mx-auto container" style={{maxWidth:500}}>
            <div className="display-6 text-center p-3">Edit Freight</div>
            <div className="border p-2 mb-4">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <span className="h2">Q1</span>
                    <i className="fa fa-plus-circle" style={{fontSize:'24px'}}></i>
                </div>
                <Freight mini={0} maxi={0} prices={0} cross={false}/>
            </div>
            <div className="border p-2 mx-auto">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <span className="h2">Q2</span>
                    <i className="fa fa-plus-circle" style={{fontSize:'24px'}}></i>
                </div>
                <div className="mt-3">
                    <Freight mini={0} maxi={0} prices={0} cross={true}/>
                    <Freight mini={0} maxi={0} prices={0} cross={true}/>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-between py-3">
                <Button variant="light" className='border shadow' onClick={()=>navigate('/overview')}>Close</Button>
                <Button variant="light" className='border shadow'>Save</Button>
            </div>
        </div>

        </>
  );
}

export default EditFreight;