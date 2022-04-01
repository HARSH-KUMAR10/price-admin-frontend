import Header from "../components/Header";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { MachineApi } from "../api";
import { getApiConfiguration } from "../apiConfiguration";
import { MachineSummaryDTO } from "../api/models/MachineSummaryDTO";

export function ListMachines() {
  const navigate = useNavigate();
  const [machineList, setmachineList] = useState<MachineSummaryDTO[]>();

  useEffect(() => {
    const api = new MachineApi(getApiConfiguration());

    api
      .machineList()
      .then((response) => {
        console.log(response);
        setmachineList(response)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const saveMachineId = (id:any) =>{
    localStorage.setItem("Machine_Id",id);
  }

  return (
    <div>
      <Header />
      <div className="display-6 text-center p-3">Machines</div>
      <Container
        className="d-flex flex-column my-4 py-4"
        style={{ maxWidth: 500 }}
      >
        {machineList &&
          machineList.map((curr) => (
            <Button
              className="py-3 px-5 border m-1 shadow"
              variant="light"
              onClick={() => {navigate(`/machine/${curr.name}`); saveMachineId(curr.name);}}
            >
              <i className="fas fa-angle-right h5 px-2"></i>{" "}
              <span className="h5">{curr.name}</span>
            </Button>
          ))}

        <div className="mt-3">
          <Button
            variant="light"
            className="border shadow"
            onClick={() => navigate("/overview")}
          >
            back
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default ListMachines;
