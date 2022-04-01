import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Container, Button } from "react-bootstrap";
import { FreightDTO } from "../api/models/FreightDTO";
import { FreightApi } from "../api";
import { getApiConfiguration } from "../apiConfiguration";
import { useNavigate } from "react-router-dom";
import Freight from '../components/Freight';


export function EditFreight() {
  const navigate = useNavigate();
  const [freightValues, setFreightValues] = useState<FreightDTO[]>();
  const [pArr, setpArr] = useState<Array<any> | []>();
  const [UID,setUID] = useState<number>(0);

  var cArr: Array<any> = [];
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

        // console.log(response)

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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRemoveItem = (Pid: number, Cid: number) => {
    console.log(Pid, Cid);



    let newArr: Array<any> = [];
    pArr && newArr.push(...pArr);

    newArr[Pid].splice(Cid, 1);

    setpArr(newArr);

    setUID(UID+1)
  };

  const handleAddItem = (Pid: number) => {
    let newArr: Array<any> = [];
    pArr && newArr.push(...pArr);

    let varObj: FreightDTO = {
      price: 0,
      qualityCategory: 0,
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
        navigate('/overview')
      })
      .catch((err) => console.log(err));
  };

  

  return (
    <>
      <Header />
      <div className="text-center mx-auto container" style={{maxWidth:500}}>
        <div className="display-6 text-center p-3">Edit Freight</div>

        <div>
          {pArr &&
            pArr.map((curr, Pid) => (
              <div className="border p-2 mb-4">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <span className="h2">Q{Pid + 1}</span>
                  <i
                    className="fa fa-plus-circle"
                    style={{ fontSize: "24px",cursor:"pointer" }}
                    onClick={() => handleAddItem(Pid)}
                  ></i>
                </div>
                {curr.map((ind: any, Cid: any) => (
                  <div className="d-flex flex-row justify-content-around align-items-center" >
                    <Freight mini={
                          ind &&
                          ind.totalAreaSquareMeterBounds &&
                          ind.totalAreaSquareMeterBounds.minimum
                        } maxi={
                          ind &&
                          ind.totalAreaSquareMeterBounds &&
                          ind.totalAreaSquareMeterBounds.maximum
                        } prices={ind && ind.price} cross={true} key={UID+Cid}/>
                        {curr.length > 1 && (
                        <i
                          className="fa fa-close text-danger"
                          style={{ fontSize: 24 ,cursor: "pointer" }}
                          onClick={() => handleRemoveItem(Pid, Cid)}
                        ></i>
                      )}
                    <div>                      
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>

        <div className="d-flex flex-row justify-content-between py-3">
          <Button variant="light" className='border shadow' onClick={()=>navigate('/overview')}>Cancel</Button>
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
