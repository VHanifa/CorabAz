import React from 'react'
import { Container } from 'react-bootstrap'
import './Elaqe.css';

function Elaqe() {
  return (
    <Container>
      <div className='dest' style={{  fontSize: "60px" }}>
          <p>Corabb. əlaqə məlumatları</p>
      </div>
      <div className='elaqe2'>
      <div>
        <p style={{fontSize:"26px"}}><strong>Corabb. mağazasının iş saatları</strong></p>
        <p>Bazar ertəsi – Cümə: 10:00 – 19:00
          <br />
        Şənbə: 10:00 – 15:00
          <br />
        Bazar: İstirahət günü</p>
        <br />
        <p style={{width:"90%"}}>Bayram günləri haqqında məlumat üçün mağaza ilə əlaqə saxlaya və ya sosial media səhifələrinə baxa bilərsiniz.</p>
      </div>
      <div>
        <p style={{fontSize:"26px"}}><strong>Corabb. mağazasının ünvanı, telefon və email məlumatları</strong></p>
        <p>Telefon:+994 99 302 06 66
          <br />
        Email: support@corabb.az
          <br />
        Ünvan: Passaj 1901, Mirvarid Dilbazi 16A, Bakı, Azərbaycan</p>
        <p>(Uroloji Xəstəxananın arxa küçəsi).</p>
      </div>
      </div>
    </Container>
  )
}

export default Elaqe