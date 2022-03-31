import {useState} from 'react';
interface numbers{
    mini:number,
    maxi:number,
    prices:number,
    cross:boolean
}
function Freight(props:numbers){
    
  const [min,setMin]=useState<number>(props.mini);
  const [max,setMax]=useState<number>(props.maxi);
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
  
    const updateMax=(a:number)=>{
      console.log(a)
      if(isNaN(a)){
        console.log(a)
          setMax(0);
      }else if(a>=0){
        setMax(a);
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
        <div className="mt-2 d-flex flex-row justify-content-around">
            <div>Min <input type="number" value={min} onChange={(evt)=>{updateMin(parseInt(evt.target.value))}}  className="m-1" style={{width:'50%'}} /></div>
            <div>Max <input type="number" value={max} onChange={(evt)=>{updateMax(parseInt(evt.target.value))}} className="m-1" style={{width:'50%'}} /></div>
            <div>Price <input type="number" value={price} onChange={(evt)=>{updatePrice(parseFloat(evt.target.value))}} className="m-1" style={{width:'50%'}} /></div>
            {props.cross?(<><i className="fa fa-close text-danger" style={{fontSize:24}}></i></>):(<></>)}
        </div>
    )
}

export default Freight;