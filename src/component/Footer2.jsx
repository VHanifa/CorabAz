import { Container } from "react-bootstrap";
import './Footer2.css';

function Footer2() {
    return (
        <div className="bg-warning py-4 text-white text-center" style={{display:"flex", padding:"30px 0 35px", justifyContent:"center"}} >
          <Container>
            <div className="footer2">
              <img src="https://corabb.az/wp-content/uploads/2021/10/corabb-visa-mastercard-online_payment-logo-1.png" alt="" style={{maxHeight:"30px", float:"left", marginBottom:"25px"}}/>
              <div style={{fontSize:"12px",  textAlign:"right", fontWeight:"600"}}>Corabb. &copy; {new Date().getFullYear()}</div>
            </div>
          </Container>
        </div>
    )
  }
  
  export default Footer2