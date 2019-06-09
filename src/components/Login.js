import React, { Component } from 'react';
import Button from 'bootstrap';
import {Container, Row, Col, Image} from 'react-bootstrap'
class Login extends Component {
  render() {
    return (
      <>
      <div className="form-login">
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image className="icone" src="https://zero1.sg/img/accountlogin-icon.png"  />
              </Col>
            </Row>
          </Container>
      
        <h1>TORRRA TORRA STORE</h1>
        <form name="form1" id="form-auth" >
          <input type="text" name="email" placeholder="email" />
          <input type="password" name="senha" placeholder="senha" />
          <Button variant="primary" size="lg" block>Logar</Button>       
        </form>
   
      </div>
      </>
    );
  }
}
export default Login;

