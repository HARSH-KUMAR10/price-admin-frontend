import Header from "../components/Header";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Material from "../components/Material";
import React, { useState, useEffect } from "react";
import { MaterialApi } from "../api";
import { getApiConfiguration } from "../apiConfiguration";
import { MaterialDTO } from "../api/models/MaterialDTO";

export function EditMaterial() {
  const navigate = useNavigate();
  const [materials, setMaterials] = useState<MaterialDTO[]>();
  const [pArr, setpArr] = useState<Array<any> | []>();
  const [UID, setUID] = useState<number>(0);

  var cArr: Array<any> = [];
  var tempQC: any;

  useEffect(() => {
    const api = new MaterialApi(getApiConfiguration());

    api
      .materialGet()
      .then((response) => {
        console.log(response);

        var tempArr: Array<any> = [];

        response.sort((a, b) =>
          a.prowellName < b.prowellName
            ? -1
            : a.prowellName > b.prowellName
            ? 1
            : 0
        );

        response.forEach((curr) => {
          if (tempQC !== curr.prowellName) {
            tempQC = curr.prowellName;

            for (var i = 0; i < response.length; i++) {
              if (tempQC === response[i].prowellName) {
                cArr.push(response[i]);
              }
            }

            tempArr.push(cArr);
            cArr = [];
          }
        });

        setpArr(tempArr);

        console.log(tempArr);

        setMaterials(response);
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

  const handleAddItem = (Pid: number) => {
    let newArr: Array<any> = [];
    pArr && newArr.push(...pArr);

    let varObj: MaterialDTO = {
      minimalTotalAreaInSquareMeters: 0,
      price: 0,
      prowellName: `ProwellName ${Pid+1}`,
    };

    newArr[Pid].push(varObj);

    setpArr(newArr);
  };

  const handleRemoveItem = (Pid: number, Cid: number) => {
    console.log(Pid, Cid);

    let newArr: Array<any> = [];
    pArr && newArr.push(...pArr);

    newArr[Pid].splice(Cid, 1);

    setpArr(newArr);

    setUID(UID + 1);
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

    const api = new MaterialApi(getApiConfiguration());

    api
      .materialUpdate({ model: tempArr })
      .then((res) => {
        console.log(res);
        navigate("/overview");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <div className="text-center mx-auto container" style={{ maxWidth: 500 }}>
        <div className="display-6 text-center p-3">Edit Material</div>
        {pArr &&
          pArr.map((curr, pid) => (
            <div className="border p-2 mx-auto">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <span className="h2">Prowell {pid + 1}</span>
                <i
                  className="fa fa-plus-circle"
                  style={{ fontSize: "24px", cursor: "pointer" }}
                  onClick={() => handleAddItem(pid)}
                ></i>
              </div>
              <div className="mt-3">
                {curr.map((ind: any, cid: any) => (
                  <div className="d-flex flex-row justify-content-around align-items-center">
                    <Material
                      mini={ind.minimalTotalAreaInSquareMeters}
                      prices={ind.price}
                      key={UID + cid}
                      handleUpdateField={handleUpdateField}
                      Pid={pid}
                      Cid={cid}
                    />

                    {curr.length > 1 && (
                      <i
                        className="fa fa-close text-danger"
                        style={{ fontSize: 24, cursor: "pointer" }}
                        onClick={() => handleRemoveItem(pid, cid)}
                      ></i>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

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

export default EditMaterial;
