import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Socks.css'
import { data } from './corab';

function Socks() {
  return (
    <Container>
      <div style={{display:"flex", flexWrap:"wrap"}}>
        {data?.socks.map((item, index) => ( 
          <div className='keen-slider__slide'>

          <Card key={index} style={{ width: '18rem', border: "none" }}>
            <Card.Img />
            <Card.Body>
              <img src={`/assets/img/${item.img}`} alt="" className="top" />
              <Card.Text className='text'>{item.text}</Card.Text>
              <p className='price'>{item.price}</p>
            </Card.Body>
          </Card>

          
          </div>


      ))}
      </div>
    </Container>
  );
}
export default Socks;