import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Boxs.css'
import { data } from './box';

function Boxs() {
  return (
    <Container>
      <div style={{display:"flex", flexWrap:"wrap", }}>
        {data?.socks.map((item, index) => ( 
          <div className='keen-slider__slide' style={{gap:"20px"}}>

          <Card key={index} style={{ width: '18rem', border: "none"}}>
            <Card.Img />
            <Card.Body>
              <img src={`/assets/img/${item.img}`} alt="" className="img" />
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
export default Boxs;