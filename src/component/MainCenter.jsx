import { Container } from 'react-bootstrap';
import './Main.css';

function MainCenter() {
  return (
    <Container >
      <div className='main2' style={{marginTop: "20px",marginBottom: "20px", display:"flex", justifyContent:'space-evenly', textAlign:"center", alignItems:"center", marginTop:"2.8rem",}}>
          <h2 style={{
            fontWeight: "700",
            fontSize: "33.184px",
            margin: "0 0 25px",
            lineHeight: "1.2"
            }}>Corabb. – Azərbaycanın corab markası</h2>
          <p style={{
             fontSize: "16px",
             lineHeight:" 1.4",
             marginBottom: "25px",
             textAlign:"left",
          }}>
          “Corabb.” markası olaraq bir-birindən zövqlü və rəngli toxunma pambıq <a className='corab' style={{color: "#fcb900"}}>corab</a> məhsullarını təqdim edirik. Hədiyyə və ya suvenir kimi də ala biləcəyiniz Azərbaycan ilə bağlı corab məhsullarımızı, onlayn sifariş və ya <a className='magaza' style={{color: "#fcb900"}}>mağazadan</a> əldə edə bilərsiniz.
          </p>
      </div>
      <hr style={{
            opacity: ".4",
            border: "none",
            borderBottom:" 2px solid",
      }} />
      <h2 style={{
        textAlign:"center", 
        fontWeight:"700", 
        margin: "0 0 25px", 
        lineHeight: "1.2",
        }}>Yeni corablar</h2>
    </Container>
  )
}

export default MainCenter