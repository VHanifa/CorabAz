import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './QutuDesti.css';
import { data } from './component/box';

function QutuDesti() {
  return (
    <Container>
      <div className='dest' style={{ textAlign: "center", fontSize: "60px", padding: "30px" }}>
        <p>Qutu dəstlər</p>
        <hr />
      </div>
      <Row className='socks' style={{display:"flex", textAlign:"center"}}>
        {data?.socks.map((item, index) => (
          <Col key={index} xs={6} md={3} className="text-center mb-3">
            <Card style={{ padding: 0, border: "none" }}>
              <Card.Img />
              <Card.Body className="p-0">
                <img src={`/assets/img/${item.img}`} alt="" className="qutular" />
                <Card.Text className='text pe-1'>{item.text}</Card.Text>
                <p className='price'>{item.price}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default QutuDesti;


// import React from 'react'
// import { Card, Container } from 'react-bootstrap'
// import './QutuDesti.css'
// import { data } from './component/box';

// function QutuDesti() {
//   return (
//     <Container>
//       <div className='dest' style={{textAlign:"center", fontSize:"60px",padding:"30px"}}>
//         <p>Qutu dəstlər</p>
//         <hr />
//       </div> 
//       <div  className='socks' style={{display:"flex", textAlign:"center"}}>
//             {data?.socks.map((item, index) => (
//               <div>
//                   <Card key={index} style={{ padding: 0, minWidth: "160px", border: "none" }}>
//                       <Card.Img />
//                           <Card.Body className="p-0">
//                               <img src={`/assets/img/${item.img}`} alt="" className="topp" />
//                                   <Card.Text className='text pe-1'>{item.text}
//                                     </Card.Text>
//                                     <p className='price'>{item.price}</p>
//                       </Card.Body>
//                   </Card>
//               </div>
//                 ))}
//       </div>
//     </Container>
//   )
// }

// export default QutuDesti