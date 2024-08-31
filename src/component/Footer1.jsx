import { Container } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import './Footer.css';

function Footer1() {
  return (
      <div className="bg-dark py-4 text-white " >
        <Container >
            <div className='footer'>
                <div className='about'>
                  <p className='elaqe'>Əlaqə:</p>
                  <p>Tel: +994 99 302 06 66</p>
                  <p>Email: support@corabb.az</p>
                  <p>Ünvan: Passaj 1901, Mirvarid Dilbazi 16A, Bakı,</p>
                  <p>Azərbaycan</p>
                </div>
              <div  className='icons'>
                  <FaWhatsapp className="icon"  onClick={() => window.open("https://api.whatsapp.com/send?phone=PHONE_NUMBER", "_blank")}/>
                  <FaInstagram className="icon" onClick={() => window.open( "https://www.instagram.com/corabb.az/", "_blank")}/>
                  <FaFacebookF className="icon" onClick={() => window.open("https://www.facebook.com/corabb.az/", "_blank")}/>
                  <FaXTwitter className="icon" onClick={() => window.open("https://twitter.com/corabb_az", "_blank")}/>
              </div>
            </div>
          
        </Container>
        
      </div>
  )
}

export default Footer1