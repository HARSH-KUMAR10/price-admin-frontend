import React, { FormEvent, useState } from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { LoginApi, LoginDTO } from '../api';
import { getApiConfiguration } from '../apiConfiguration';
import Loading from '../components/Loading';

export function Login() {
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalidLogin, setIsInvalidLogin] = useState(false);
  const [login, setLogin] = useState<LoginDTO>({
    username: "",
    password: ""
  })
  const navigate = useNavigate();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity()) {
      setIsLoading(true);
      const api = new LoginApi(getApiConfiguration());
      api.loginLogin({ model: login }).then((response) => {
        navigate("/overview");
      }).catch(() => {
        setIsLoading(false)
        setIsInvalidLogin(true);
      })
    }
    setValidated(true);
  };

  if (isLoading) {
    return <Loading />
  }

  return (
    <Row className="justify-content-center">
      <Col xs={6}>
        <h1>Login</h1>
        <Form noValidate validated={validated} onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter your username" required value={login.username} onChange={e => setLogin({ ...login, username: e.currentTarget.value })} />
            <Form.Control.Feedback type="invalid">Please enter a username.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" required value={login.password} onChange={e => setLogin({ ...login, password: e.currentTarget.value })} />
            <Form.Control.Feedback type="invalid">Please enter a password.</Form.Control.Feedback>
          </Form.Group>
          {isInvalidLogin && <Alert variant="danger">
            <p>Incorrect username or password</p>
          </Alert>}
          <div className='d-flex justify-content-end'>
            <Button variant="primary" type="submit"><i className=''></i>Login</Button>
          </div>
        </Form>
      </Col>
    </Row>

  );
}

export default Login;