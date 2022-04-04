import {useState} from 'react';

interface numbers{
    mini:number,
    prices:number,
    handleUpdateField : (args:any) => any,
    Pid:number,
    Cid: number
}

const Material : React.FC<numbers> =  (props:numbers) =>{
    
  const [min,setMin]=useState<number>(props.mini);
  const [price,setPrice]=useState<number>(props.prices);
    const updateMin=(a:number)=>{
        console.log(a)
        if(isNaN(a)){
          console.log(a)
            setMin(0);
            props.handleUpdateField({type : 'minimalTotalAreaInSquareMeters',value : 0,Pid : props.Pid,Cid : props.Cid});

        }else if(a>=0){
          setMin(a);
          props.handleUpdateField({type : 'minimalTotalAreaInSquareMeters',value : a,Pid : props.Pid,Cid : props.Cid});

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
                    props.handleUpdateField({type : 'price',value : parseFloat(temp),Pid : props.Pid,Cid : props.Cid});

                }
            }else{
                setPrice(parseFloat(temp))
                props.handleUpdateField({type : 'price',value : parseFloat(temp),Pid : props.Pid,Cid : props.Cid});

            }
        }else{
            setPrice(0)
            props.handleUpdateField({type : 'price',value : 0,Pid : props.Pid,Cid : props.Cid});

        }
    }
    return(
        <div className="d-flex flex-row justify-content-around align-items-center">
        <div>Min <input type="number" value={min} onChange={(evt)=>{updateMin(parseInt(evt.target.value))}} className="m-1" style={{width:'50%'}} /></div>
        <div>Price <input type="number" value={price} onChange={(evt)=>{updatePrice(parseFloat(evt.target.value))}} className="m-1" style={{width:'50%'}} /></div>
      </div>
    )
}
export default Material;