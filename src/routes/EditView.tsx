import Header from "../components/Header";
import {Container,Button} from 'react-bootstrap'

function EditView(){
    return(
        <>
        <Header/>
        <div className="text-center mx-auto w-50">
            <div className="display-6 text-center p-3">Edit View Basics</div>
            <div className="border p-2 mb-4">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <span className="h2">Set-Headline 1</span>
                    <i className="fa fa-plus-circle" style={{fontSize:'24px'}}></i>
                </div>
                <div className="mt-2">
                    <input type="text" className="m-1" style={{width:'90%'}} placeholder="Set-Entry"/>
                </div>
            </div>
            <div className="border p-2 mx-auto">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <span className="h2">Set-Headline 2</span>
                    <i className="fa fa-plus-circle" style={{fontSize:'24px'}}></i>
                </div>
                <div className="mt-3">
                    <div className="d-flex flex-row justify-content-around">
                    <input type="text" className="m-1" style={{width:'80%'}} placeholder="Set-Entry"/>
                    <i className="fa fa-close text-danger" style={{fontSize:24}}></i>
                    </div>
                    <div className="d-flex flex-row justify-content-around">
                    <input type="text" className="m-1" style={{width:'80%'}} placeholder="Set-Entry"/>
                    <i className="fa fa-close text-danger" style={{fontSize:24}}></i>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-between py-3">
                <Button>Close</Button>
                <Button>Save</Button>
            </div>
        </div>

        </>
    )
}

export default EditView;