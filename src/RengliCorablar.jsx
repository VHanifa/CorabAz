import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './RengliCorablar.css';
import { data } from './component/corab2';

function RengliCorablar() {
  return (
    <Container>
      <div className='dest' style={{ textAlign: "center", fontSize: "60px", padding: "30px" }}>
        <p>Rəngli corablar</p>
        <hr />
      </div>
      <Row className='socks'>
        {data?.socks.map((item, index) => (
          <Col key={index} md={6} lg={3} style={{ marginBottom: '15px' }}>
            <Card style={{ border: "none" }}>
              <img src={`/assets/img/${item.img}`} alt="" className="topp" />
              <Card.Body>
                <Card.Text className='text'>{item.text}</Card.Text>
                <p className='price'>{item.price}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default RengliCorablar;


// import React from 'react'
// import { Card, Container } from 'react-bootstrap'
// import './RengliCorablar.css'
// import { data } from './component/corab';

// function RengliCorablar() {
//   return (
//     <Container>
//       <div className='dest' style={{textAlign:"center", fontSize:"60px",padding:"30px"}}>
//       <p>Rəngli corablar</p>
//         <hr />
//       </div>
//       <div className='socks' style={{display:"flex",flexWrap:"wrap"}}>
//         {data?.socks.map((item, index) => ( 
//         <div>
//           <Card key={index} style={{ width: '18rem', border: "none" }}>
//             <Card.Img />
//             <Card.Body>
//               <img src={`/assets/img/${item.img}`} alt="" className="topp" />
//               <Card.Text className='text'>{item.text}</Card.Text>
//               <p className='price'>{item.price}</p>
//             </Card.Body>
//           </Card>
//         </div>
//       ))}
//     </div>
//       </Container>
// )
// }

// export default RengliCorablar


          

