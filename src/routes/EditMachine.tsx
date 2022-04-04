import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Machine from "../components/Machine";
import { MachineDetailDTO } from "../api/models/MachineDetailDTO";
import { MachineApi } from "../api";
import { getApiConfiguration } from "../apiConfiguration";
import { ProductionPriceDTO } from "../api/models/ProductionPriceDTO";

export function EditMachine() {
  const navigate = useNavigate();
  const [machine, setMachine] = useState<MachineDetailDTO>();
  const [UID, setUID] = useState<number>(0);

  const [BgRed, setBgRed] = useState<Array<any>>([])

  var bgColorRed: Array<any> = [];

  useEffect(() => {

    let id: string = localStorage.getItem("Machine_Id") || "";
    console.log(id);
    const api = new MachineApi(getApiConfiguration());

    api
      .machineGet({ id })
      .then((response) => {
        console.log(response);

        const machineObj: MachineDetailDTO = {
          name: response.name,
          productionPrices: response.productionPrices,
        };

        setMachine(machineObj);

        for(var j = 1;j<response.productionPrices.length;j++) {

          let max = 0 ;
          let min = 0 ;

           max = response.productionPrices[j - 1].totalAreaSquareMeterBounds.maximum!;
           min =  response.productionPrices[j].totalAreaSquareMeterBounds.minimum!;

          if(max >= min){
            bgColorRed.push({cid : j-1,toColor:true})
            bgColorRed.push({cid : j,toColor:true})
          }
        }

        setBgRed(bgColorRed)

        bgColorRed.map((curr) => console.log(curr))

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpdateField = (args: any) => {
    console.log(args);

    const { Cid: changeCid, type, value } = args;

    machine &&
      machine.productionPrices.map((curr: any, Cid: any) => {
        if (Cid === changeCid) {
          if (type === "minimum" || type === "maximum") {
            console.log(curr.totalAreaSquareMeterBounds[type], value);

            curr.totalAreaSquareMeterBounds[type] = value;
          } else {
            curr[type] = value;
          }
        }
      });

    console.log(machine);
  };

  const handleRemoveItem = (Cid: number) => {
    if (machine) {
      var newArr: MachineDetailDTO = {
        name: machine.name,
        productionPrices: [],
      };

      // newArr["productionPrices"] = []

      console.log(machine.productionPrices);

      machine.productionPrices.map((curr, ppid) => {
        console.log(ppid, Cid);

        if (ppid !== Cid) {
          newArr["productionPrices"].push(curr);
        }
      });

      console.log(newArr.productionPrices);

      setMachine(newArr);

      setUID(UID + 1);
    }
  };

  const handleAddItem = () => {
    let newArr: MachineDetailDTO;

    if (machine) {
      newArr = machine;
      console.log(machine.productionPrices[0].printColorCharges.length);
      var tempColor = [];
      for (
        var i = 0;
        i < machine.productionPrices[0].printColorCharges.length;
        i++
      ) {
        tempColor.push({ count: i, price: 0 });
      }
      let varObj: ProductionPriceDTO = {
        totalAreaSquareMeterBounds: {
          minimum: 0,
          maximum: 0,
        },
        price: 0,
        expressCharge: 0,
        printColorCharges: tempColor,
        addPurchasePrice: false,
        addFreightPrice: false,
      };

      newArr.productionPrices.unshift(varObj);

      console.log(newArr.productionPrices);

      setMachine(newArr);
      setUID(UID + 1);
    }
  };

  const handleSave = () => {
    if (machine) {
      var tempArr: MachineDetailDTO = {
        name: machine.name,
        productionPrices: [],
      };
      console.log("before:", machine);
      machine &&
        machine.productionPrices.map((curr) => {
          tempArr.productionPrices.push(curr);
        });

      const api = new MachineApi(getApiConfiguration());
      api
        .machineUpdate({ model: tempArr })
        .then((res) => {
          console.log(res);
          navigate('/overview')
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Header />
      <div className="mx-auto container mw-1000 my-3">
        <div className="display-6 text-center p-3">Edit Machine</div>

        <div className=" border p-2 mx-auto">
          <div className="row align-items-baseline">
            <span className="col-10 col-md-11 h3 text-left">
              {machine && machine.name}
            </span>
            <i
              className="fa fa-plus-circle col-2 col-md-1"
              style={{ cursor: "pointer" }}
              onClick={handleAddItem}
            ></i>
          </div>
          <div>
            {machine &&
              machine.productionPrices.map((curr, cid) => (
                <div className="mt-3 border p-2 d-flex">
                  <Machine
                    mini={
                      curr &&
                      curr.totalAreaSquareMeterBounds &&
                      curr.totalAreaSquareMeterBounds.minimum
                    }
                    maxi={
                      curr &&
                      curr.totalAreaSquareMeterBounds &&
                      curr.totalAreaSquareMeterBounds.maximum
                    }
                    prices={curr && curr.price}
                    exchas={curr && curr.expressCharge}
                    colors={curr && curr.printColorCharges}
                    addFreightPrice={curr && curr.addFreightPrice}
                    addPurchasePrice={curr && curr.addPurchasePrice}
                    key={cid + UID}
                    handleUpdateField={handleUpdateField}
                    Cid={cid}
                    bgColorRed={BgRed}
                  />
                  <div>
                    <i
                      className="fa fa-close text-danger"
                      style={{ fontSize: 24, cursor: "pointer" }}
                      onClick={() => handleRemoveItem(cid)}
                    ></i>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="row justify-content-between">
          <Button
            onClick={() => navigate("/machine")}
            variant="light"
            className="col-11 border shadow m-2 col-md-1"
          >
            Cancel
          </Button>
          <Button
            variant="light"
            className="border shadow m-2 col-11 col-md-1"
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

export default EditMachine;
