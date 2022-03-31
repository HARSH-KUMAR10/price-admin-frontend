import {useState} from 'react';

interface numbers{
    mini:number,
    prices:number,
}

function Material(props:numbers){
    
  const [min,setMin]=useState<number>(props.mini);
  const [price,setPrice]=useState<number>(props.prices);
    const updateMin=(a:number)=>{
        console.log(a)
        if(isNaN(a)){
          console.log(a)
            setMin(0);
        }else if(a>=0){
          setMin(a);
      }
    }
    const updatePrice=(a:number)=>{
        if(a>=0){
            var temp = a.toFixed(3)
            var second = a.toString().split('.');
            console.log(second);
            if(second.length==2){
                if(second[1].length<=3){
                    
                    console.log(temp);
                    setPrice(parseFloat(temp))
                }
            }else{
                setPrice(parseFloat(temp))
            }
        }else{
            setPrice(0)
        }
    }
    return(
        <div className="d-flex flex-row justify-content-around align-items-center">
        <div>Min <input type="number" value={min} onChange={(evt)=>{updateMin(parseInt(evt.target.value))}} className="m-1" style={{width:'50%'}} /></div>
        <div>Price <input type="number" value={price} onChange={(evt)=>{updatePrice(parseFloat(evt.target.value))}} className="m-1" style={{width:'50%'}} /></div>
        <i className="fa fa-close text-danger" style={{fontSize:24}}></i>
      </div>
    )
}
export default Material;