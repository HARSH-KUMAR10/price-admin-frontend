import { useState,useEffect } from "react";
import { isMissingDeclaration } from "typescript";

interface values {
  mini: number | undefined;
  prices: number;
  maxi: number | undefined;
  exchas: number;
  colors: Array<any>;
  addPurchasePrice: boolean;
  addFreightPrice: boolean;
  handleUpdateField: (args: any) => any;
  Cid: number;
  bgColorRed: Array<any>;
}

const Machine: React.FC<values> = (props: values) => {
  const [min, setMin] = useState<number | undefined>(props.mini);
  const [max, setMax] = useState<number | undefined>(props.maxi);
  const [price, setPrice] = useState<number>(props.prices);
  const [excha, setExcha] = useState<number>(props.exchas);
  const [colors, setColors] = useState<Array<any>>(props.colors);
  const [addPurchasePrice, setAddPurchasePrice] = useState<boolean>(
    props.addPurchasePrice
  );
  const [addFreightPrice, setAddFreightPrice] = useState<boolean>(
    props.addFreightPrice
  );
  const [toColor, setToColor] = useState<boolean>();


  const updateInt = (a: number, s: string) => {
    console.log(a);
    if (isNaN(a)) {
      console.log(a);
      if (s === "min") {
        setMin(0);
        props.handleUpdateField({ type: "minimum", value: 0, Cid: props.Cid });
      } else if (s === "max") {
        setMax(0);
        props.handleUpdateField({ type: "maximum", value: 0, Cid: props.Cid });
      }
    } else if (a >= 0) {
      if (s === "min") {
        setMin(a);
        props.handleUpdateField({ type: "minimum", value: a, Cid: props.Cid });
      } else if (s === "max") {
        setMax(a);
        props.handleUpdateField({ type: "maximum", value: a, Cid: props.Cid });
      }
    }
  };
  const updateFloat = (a: number, s: string, id: number | null) => {
    if (a >= 0) {
      var temp = a.toFixed(3);
      var second = a.toString().split(".");
      if (second.length == 2) {
        if (second[1].length <= 3) {
          console.log(temp);
          if (s === "price") {
            setPrice(parseFloat(temp))
            props.handleUpdateField({type : 'price',value : parseFloat(temp),Cid : props.Cid});

          }
          else if (s === "excha") {
            setExcha(parseFloat(temp))
            props.handleUpdateField({type : 'expressCharge',value : parseFloat(temp),Cid : props.Cid});

          }
          else if (s === "c") {
            let tempArr: Array<any> = colors;
            if (id !== null) tempArr[id].price = parseFloat(temp);
            setColors([...tempArr]);
            props.handleUpdateField({type : 'printColorCharges',value : [...tempArr],Cid : props.Cid});

          }
        }
      } else {
        if (s === "price") {
          setPrice(parseFloat(temp))
          props.handleUpdateField({type : 'price',value : parseFloat(temp),Cid : props.Cid});

        }
        else if (s === "excha") {
          setExcha(parseFloat(temp))
          props.handleUpdateField({type : 'expressCharge',value : parseFloat(temp),Cid : props.Cid});

        }
        else if (s === "c") {
          let tempArr: Array<any> = colors;
          if (id !== null) tempArr[id].price = parseFloat(temp);
          setColors([...tempArr]);
          props.handleUpdateField({type : 'printColorCharges',value : [...tempArr],Cid : props.Cid});

        }
      }
    } else {
      if (s === "price") {
        setPrice(parseFloat("0"))
        props.handleUpdateField({type : 'price',value : parseFloat("0"),Cid : props.Cid});

      }
      else if (s === "excha") {
        setExcha(parseFloat("0"))
        props.handleUpdateField({type : 'expressCharge',value : parseFloat("0"),Cid : props.Cid});

      }
      else if (s === "c") {
        let tempArr: Array<any> = colors;

        if (id) tempArr[id].price = 0;
        setColors([...tempArr]);
        props.handleUpdateField({type : 'printColorCharges',value : [...tempArr],Cid : props.Cid});

      }
    }
  };

  useEffect(() => {
    props.bgColorRed.map((curr: any, ind) => {
      if (
        props.Cid === curr.cid &&
        curr.toColor === true
      ) {
        setToColor(true);
        console.log(props.Cid, curr.toColor);
      }
    });
  }, [props.bgColorRed, props.Cid]);

  return (
    <div className={(toColor ? "bg-danger" : "") }>
      <div className="text-center row my-2 align-items-baseline">
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12 col-md-6 p-1">
              Min{" "}
              <input
                type="number"
                value={min}
                onChange={(evt) => updateInt(parseInt(evt.target.value), "min")}
                style={{ width: "50%" }}
              />
            </div>
            <div className="col-12 col-md-6 p-1">
              Price{" "}
              <input
                type="number"
                value={price}
                onChange={(evt) =>
                  updateFloat(parseFloat(evt.target.value), "price", null)
                }
                style={{ width: "50%" }}
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12 col-md-10">
              <div className="row">
                <div
                  className="col-12 col-md-6 p-1"
                  onClick={() => {
                    setAddFreightPrice(!addFreightPrice);
                    props.handleUpdateField({type : 'addFreightPrice',value : !addFreightPrice,Cid : props.Cid});
                  }}
                >
                  <input type="checkbox" checked={addFreightPrice} /> Add
                  Freight Price
                </div>
                <div
                  className="col-12 col-md-6 p-1"
                  onClick={() => {
                    setAddPurchasePrice(!addPurchasePrice);
                    props.handleUpdateField({type : 'addPurchasePrice',value : !addPurchasePrice,Cid : props.Cid});
                  }}
                >
                  <input type="checkbox" checked={addPurchasePrice} /> Add
                  Purchase Price
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center row my-2 mx-0 align-items-baseline">
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12 col-md-6 p-1">
              Max{" "}
              <input
                type="number"
                value={max}
                onChange={(evt) => updateInt(parseInt(evt.target.value), "max")}
                style={{ width: "50%" }}
              />
            </div>
            <div className="col-12 col-md-6 p-1">
              Excha{" "}
              <input
                type="number"
                value={excha}
                onChange={(evt) =>
                  updateFloat(parseFloat(evt.target.value), "excha", null)
                }
                style={{ width: "50%" }}
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 border p-1">
          <div className="row mx-0">
            {colors.map((curr, ind) => (
              <div className="col-12 col-md-4 p-1">
                {curr.count} Colors{" "}
                <input
                  type="number"
                  value={curr.price}
                  onChange={(evt) =>
                    updateFloat(parseFloat(evt.target.value), "c", ind)
                  }
                  style={{ maxWidth: "100%" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Machine;
