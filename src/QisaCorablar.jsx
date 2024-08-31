import React from 'react'
import './QisaCorablar.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { data } from './component/qisa';

function QisaCorablar() {
  return (
  <>
    <div className='qisacorab'>
     <p className='qisa'>Qısa corablar</p>
    </div>
    <Container>
      <hr style={{padding:"25px"}}/>
      <Row className='socks'>
        {data?.socks.map((item, index) => (
          <Col key={index} md={6} lg={3} style={{ marginBottom: '15px' }}>
            <Card style={{ border: "none" , padding:"45px 15px"}}>
              <img src={`/assets/img/${item.img}`} alt="" className="toppp" />
              <Card.Body>
                <Card.Text className='text'>{item.text}</Card.Text>
                <p className='price'>{item.price}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </>
  )
}

export default QisaCorablar