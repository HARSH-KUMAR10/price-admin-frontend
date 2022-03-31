import React from 'react';
import { Container } from 'react-bootstrap';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import EditFreight from './routes/EditFreight';
import EditMachine from './routes/EditMachine';
import EditMaterial from './routes/EditMaterial';
import ListMachines from './routes/ListMachines';
import EditView from './routes/EditView';
import Login from './routes/Login';
import Overview from './routes/Overview';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <MemoryRouter>
          <Routes >
            <Route path="/" element={<EditFreight />} />
            <Route path="/material" element={<EditMaterial />} />
            <Route path="/machine/2" element={<EditMachine />} />
            <Route path="/machine" element={<ListMachines />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/view" element={<EditView />} />
            <Route path="/f" element={<Login />} />
          </Routes >
        </MemoryRouter>
      </Container>
    </div>
  );
}

export default App;
