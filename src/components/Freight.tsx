import { useState, useEffect } from "react";
interface numbers {
  mini: number;
  maxi: number;
  prices: number;
  cross: boolean;
  handleUpdateField: (args: any) => any;
  Pid: number;
  Cid: number;
  bgColorRed: Array<any>;
}

const Freight: React.FC<numbers> = (props: numbers) => {
  const [min, setMin] = useState<number>(props.mini);
  const [max, setMax] = useState<number>(props.maxi);
  const [price, setPrice] = useState<number>(props.prices);
  const [toColor, setToColor] = useState<boolean>();

  const updateMin = (a: number) => {
    console.log(a);
    if (isNaN(a)) {
      console.log(a);
      setMin(0);
      props.handleUpdateField({
        type: "minimum",
        value: 0,
        Pid: props.Pid,
        Cid: props.Cid,
      });
    } else if (a >= 0) {
      setMin(a);
      props.handleUpdateField({
        type: "minimum",
        value: a,
        Pid: props.Pid,
        Cid: props.Cid,
      });
    }
  };

  const updateMax = (a: number) => {
    console.log(a);
    if (isNaN(a)) {
      console.log(a);
      setMax(0);
      props.handleUpdateField({
        type: "maximum",
        value: 0,
        Pid: props.Pid,
        Cid: props.Cid,
      });
    } else if (a >= 0) {
      setMax(a);
      props.handleUpdateField({
        type: "maximum",
        value: a,
        Pid: props.Pid,
        Cid: props.Cid,
      });
    }
  };

  const updatePrice = (a: number) => {
    if (a >= 0) {
      var temp = a.toFixed(3);
      var second = a.toString().split(".");
      console.log(second);
      if (second.length == 2) {
        if (second[1].length <= 3) {
          console.log(temp);
          setPrice(parseFloat(temp));
          props.handleUpdateField({
            type: "price",
            value: parseFloat(temp),
            Pid: props.Pid,
            Cid: props.Cid,
          });
        }
      } else {
        setPrice(parseFloat(temp));
        props.handleUpdateField({
          type: "price",
          value: parseFloat(temp),
          Pid: props.Pid,
          Cid: props.Cid,
        });
      }
    } else {
      setPrice(0);
      props.handleUpdateField({
        type: "price",
        value: 0,
        Pid: props.Pid,
        Cid: props.Cid,
      });
    }
  };

  useEffect(() => {
    props.bgColorRed.map((curr: any, ind) => {
      if (
        props.Pid === curr.pid &&
        props.Cid === curr.cid &&
        curr.toColor === true
      ) {
        setToColor(true);
        console.log(props.Pid, props.Cid, curr.toColor);
      }
    });
  }, [props.bgColorRed, props.Pid, props.Cid]);

  return (
    <div
      className={"mt-2 row " +  (toColor ? "bg-danger" : "")}
    >
      <div className="col-4">
        Min{" "}
        <input
          type="number"
          value={min}
          onChange={(evt) => {
            updateMin(parseInt(evt.target.value));
          }}
          className="m-1"
          style={{ width: "50%" }}
        />
      </div>
      <div className="col-4">
        Max{" "}
        <input
          type="number"
          value={max}
          onChange={(evt) => {
            updateMax(parseInt(evt.target.value));
          }}
          className="m-1"
          style={{ width: "50%" }}
        />
      </div>
      <div className="col-4">
        Price{" "}
        <input
          type="number"
          value={price}
          onChange={(evt) => {
            updatePrice(parseFloat(evt.target.value));
          }}
          className="m-1"
          style={{ width: "50%" }}
        />
      </div>
    </div>
  );
};

export default Freight;
