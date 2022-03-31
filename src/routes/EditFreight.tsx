import React from 'react';
import Header from "../components/Header";
import {Container,Button} from 'react-bootstrap'

export function EditFreight() {
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
                <div className="mt-2 d-flex flex-row justify-content-around">
                    <div>Min <input type="text" className="m-1" style={{width:'50%'}} placeholder="Set-Entry"/></div>
                    <div>Max <input type="text" className="m-1" style={{width:'50%'}} placeholder="Set-Entry"/></div>
                    <div>Price <input type="text" className="m-1" style={{width:'50%'}} placeholder="Set-Entry"/></div>
                </div>
            </div>
            <div className="border p-2 mx-auto">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <span className="h2">Q2</span>
                    <i className="fa fa-plus-circle" style={{fontSize:'24px'}}></i>
                </div>
                <div className="mt-3">
                    <div className="d-flex flex-row justify-content-around align-items-center">
                    <div>Min <input type="text" className="m-1" style={{width:'50%'}} placeholder="Set-Entry"/></div>
                    <div>Max <input type="text" className="m-1" style={{width:'50%'}} placeholder="Set-Entry"/></div>
                    <div>Price <input type="text" className="m-1" style={{width:'50%'}} placeholder="Set-Entry"/></div>
                    <i className="fa fa-close text-danger" style={{fontSize:24}}></i>
                    </div>
                    <div className="d-flex flex-row justify-content-around align-items-center">
                    <div>Min <input type="text" className="m-1" style={{width:'50%'}} placeholder="Set-Entry"/></div>
                    <div>Max <input type="text" className="m-1" style={{width:'50%'}} placeholder="Set-Entry"/></div>
                    <div>Price <input type="text" className="m-1" style={{width:'50%'}} placeholder="Set-Entry"/></div>
                    <i className="fa fa-close text-danger" style={{fontSize:24}}></i>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-between py-3">
                <Button variant="light" className='border shadow'>Close</Button>
                <Button variant="light" className='border shadow'>Save</Button>
            </div>
        </div>

        </>
  );
}

export default EditFreight;