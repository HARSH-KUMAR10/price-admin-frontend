import {useState} from 'react';

interface values{
    mini:number,
    prices:number,
    maxi:number,
    exchas:number,
    color0:number,
    color1:number,
    color2:number,
}

function Machine(props:values){
    const [min,setMin] = useState<number>(props.mini);
    const [max,setMax] = useState<number>(props.maxi);
    const [price,setPrice] = useState<number>(props.prices);
    const [excha,setExcha] = useState<number>(props.exchas);
    const [colorZ,setColorZ] = useState<number>(props.color0);
    const [colorO,setColorO] = useState<number>(props.color1);
    const [colorT,setColorT] = useState<number>(props.color2);
    const updateInt=(a:number,s:string)=>{
        console.log(a)
        if(isNaN(a)){
          console.log(a)
            if(s==='min') setMin(0);
            else if(s==='max') setMax(0);
        }else if(a>=0){
            if(s==='min') setMin(a);
            else if(s==='max') setMax(a);
      }
    }
    const updateFloat=(a:number,s:string)=>{
        if(a>=0){
            var temp = a.toFixed(3)
            var second = a.toString().split('.');
            console.log(second);
            if(second.length==2){
                if(second[1].length<=3){
                    
                    console.log(temp);
                    if(s==='price') setPrice(parseFloat(temp));
                    else if(s==='excha') setExcha(parseFloat(temp));
                    else if(s==='c0') setColorZ(parseFloat(temp));
                    else if(s==='c1') setColorO(parseFloat(temp));
                    else if(s==='c2') setColorT(parseFloat(temp));
                }
            }else{
                
                if(s==='price') setPrice(parseFloat(temp));
                else if(s==='excha') setExcha(parseFloat(temp));
                else if(s==='c0') setColorZ(parseFloat(temp));
                else if(s==='c1') setColorO(parseFloat(temp));
                else if(s==='c2') setColorT(parseFloat(temp));
            }
        }else{
            
            if(s==='price') setPrice(parseFloat('0'));
            else if(s==='excha') setExcha(parseFloat('0'));
            else if(s==='c0') setColorZ(parseFloat('0'));
            else if(s==='c1') setColorO(parseFloat('0'));
            else if(s==='c2') setColorT(parseFloat('0'));
        }
    }
    return(
        <>
        <div className='text-center row my-2 align-items-baseline'>
        <div className='col-12 col-md-6'>
            <div className="row">
            <div className="col-12 col-md-6 p-1">Min <input type="number" value={min} onChange={(evt)=>updateInt(parseInt(evt.target.value),'min')} style={{width:'50%'}} /></div>
            <div className="col-12 col-md-6 p-1">Price <input type="number" value={price} onChange={(evt)=>updateFloat(parseFloat(evt.target.value),'price')} style={{width:'50%'}} /></div>
            </div>
        </div>
        <div className='col-12 col-md-6'>
        <div className="row">
            <div className='col-12 col-md-10'>
                <div className="row">
                    <div className='col-12 col-md-6 p-1'><input type="checkbox" /> Add Purchase Price</div>
                    <div className='col-12 col-md-6 p-1'><input type="checkbox" /> Add Purchase Price</div>
                </div>
            </div>
            <div className='col-12 col-md-2'>
                <i className="fa fa-close text-danger col-12 col-md-4" style={{fontSize:24}}></i>
            </div>
        </div>
        </div>
      </div>

      <div className='text-center row my-2 mx-0 align-items-baseline'>
        <div className='col-12 col-md-6'>
            <div className="row">
            <div className="col-12 col-md-6 p-1">Max <input type="number" value={max} onChange={(evt)=>updateInt(parseInt(evt.target.value),'max')} style={{width:'50%'}} /></div>
            <div className="col-12 col-md-6 p-1">Excha <input type="number" value={excha} onChange={(evt)=>updateFloat(parseFloat(evt.target.value),'excha')} style={{width:'50%'}} /></div>
            </div>
        </div>
        <div className='col-12 col-md-6 border p-1'>
            <div className="row">
            <div className="col-12 col-md-4 p-1">
                0 Colors <input type="number" value={colorZ} onChange={(evt)=>updateFloat(parseFloat(evt.target.value),'c0')} style={{width:'33%'}} />
            </div>
            <div className="col-12 col-md-4 p-1">
                1 Colors <input type="number" value={colorO} onChange={(evt)=>updateFloat(parseFloat(evt.target.value),'c1')} style={{width:'33%'}} />
            </div>
            <div className="col-12 col-md-4 p-1">
                2 Colors <input type="number" value={colorT} onChange={(evt)=>updateFloat(parseFloat(evt.target.value),'c2')} style={{width:'33%'}} />
            </div>
            </div>
        </div>
      </div>
        </>
    )
}

export default Machine;