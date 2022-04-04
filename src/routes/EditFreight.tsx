import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Container, Button } from "react-bootstrap";
import { FreightDTO } from "../api/models/FreightDTO";
import { FreightApi } from "../api";
import { getApiConfiguration } from "../apiConfiguration";
import { useNavigate } from "react-router-dom";
import Freight from "../components/Freight";

export function EditFreight() {
  const navigate = useNavigate();
  const [freightValues, setFreightValues] = useState<FreightDTO[]>();
  const [pArr, setpArr] = useState<Array<any> | []>();
  const [UID, setUID] = useState<number>(0);
  
  const [BgRed, setBgRed] = useState<Array<any>>([])

  var cArr: Array<any> = [];
  var bgColorRed: Array<any> = [];
  var tempQC: any;

  useEffect(() => {
    const api = new FreightApi(getApiConfiguration());

    api
      .freightGet()
      .then((response) => {
        response.sort((a, b) =>
          a.qualityCategory < b.qualityCategory
            ? -1
            : a.qualityCategory > b.qualityCategory
            ? 1
            : 0
        );

        console.log(response);

        var tempArr: Array<any> = [];

        response.forEach((curr) => {
          if (tempQC !== curr.qualityCategory) {
            tempQC = curr.qualityCategory;

            for (var i = 0; i < response.length; i++) {
              if (tempQC === response[i].qualityCategory) {
                cArr.push(response[i]);
              }
            }

            tempArr.push(cArr);
            cArr = [];
          }
        });

        setpArr(tempArr);

        setFreightValues(response);

        var bgColorRed: Array<any> = [];


        for (var i = 0; i < tempArr.length; i++) {
          // console.log(tempArr[i]);

          for(var j = 1;j<tempArr[i].length; j++) {
            // console.log(tempArr[i][j])

            let max = tempArr[i][j - 1].totalAreaSquareMeterBounds.maximum
            let min = tempArr[i][j].totalAreaSquareMeterBounds.minimum


            // console.log(max,min)

            if(max >= min){
              // console.log('yes')

              bgColorRed.push({pid : i,cid : j-1,toColor:true})
              bgColorRed.push({pid : i,cid : j,toColor:true})
            }
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

    const { Pid: changePid, Cid: changeCid, type, value } = args;

    pArr &&
      pArr.forEach((curr, Pid) => {
        if (Pid === changePid) {
          curr.forEach((ind: any, Cid: any) => {
            if (Cid === changeCid) {
              if (type === "minimum" || type === "maximum") {
                console.log(ind.totalAreaSquareMeterBounds[type], value);

                ind.totalAreaSquareMeterBounds[type] = value;
              } else {
                console.log(ind[type], value);

                ind[type] = value;
              }
            }
          });
        }
      });

    console.log(pArr);
  };

  const handleRemoveItem = (Pid: number, Cid: number) => {
    console.log(Pid, Cid);

    let newArr: Array<any> = [];
    pArr && newArr.push(...pArr);

    newArr[Pid].splice(Cid, 1);

    setpArr(newArr);

    setUID(UID + 1);
  };

  const handleAddItem = (Pid: number) => {
    let newArr: Array<any> = [];
    pArr && newArr.push(...pArr);

    let varObj: FreightDTO = {
      price: 0,
      qualityCategory: Pid,
      totalAreaSquareMeterBounds: {
        minimum: 0,
        maximum: 0,
      },
    };

    newArr[Pid].push(varObj);

    setpArr(newArr);
  };

  const handleSave = () => {
    let tempArr: Array<any> = [];

    pArr &&
      pArr.map((curr) => {
        curr.map((ind: any) => {
          tempArr.push(ind);
        });
      });

    console.log(tempArr);

    const api = new FreightApi(getApiConfiguration());

    api
      .freightUpdate({ model: tempArr })
      .then((res) => {
        console.log(res);
        navigate("/overview");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <div className="mx-auto container">
        <div className="display-6 text-center p-3">Edit Freight</div>

        <div>
          {pArr &&
            pArr.map((curr, Pid) => (
              <div className="border p-2 mb-4">
                <div className="row align-items-center text-left">
                  <span className="h2 col-md-11 col-10">Q{Pid + 1}</span>
                  <i
                    className="fa fa-plus-circle col-md-1 col-2"
                    style={{ fontSize: "24px", cursor: "pointer" }}
                    onClick={() => handleAddItem(Pid)}
                  ></i>
                </div>
                {curr.map((ind: any, Cid: any) => (
                  <div className="row align-items-center mx-2">
                    <div className="col-10"><Freight
                      mini={
                        ind &&
                        ind.totalAreaSquareMeterBounds &&
                        ind.totalAreaSquareMeterBounds.minimum
                      }
                      maxi={
                        ind &&
                        ind.totalAreaSquareMeterBounds &&
                        ind.totalAreaSquareMeterBounds.maximum
                      }
                      prices={ind && ind.price}
                      cross={true}
                      key={UID + Cid}
                      handleUpdateField={handleUpdateField}
                      Pid={Pid}
                      Cid={Cid}
                      bgColorRed={BgRed}
                    />
                    </div>
                    {curr.length > 1 && (
                      <i
                        className="fa fa-close text-danger col-2"
                        style={{ fontSize: 24, cursor: "pointer" }}
                        onClick={() => handleRemoveItem(Pid, Cid)}
                      ></i>
                    )}
                    <div></div>
                  </div>
                ))}
              </div>
            ))}
        </div>

        <div className="d-flex flex-row justify-content-between py-3">
          <Button
            variant="light"
            className="border shadow"
            onClick={() => navigate("/overview")}
          >
            Cancel
          </Button>
          <Button
            variant="light"
            className="border shadow"
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
}

export default EditFreight;
