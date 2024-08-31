import React from 'react'
import './SifarislerinIzlenmesi.css';
import { Container } from 'react-bootstrap';

const SifarislerinIzlenmesi = () => {
  return (
    <Container className='izleMain'>
    <div className='sifarler'>
    <p className='sual'>Sifarişin izlənilməsi</p>
    </div>
    <form action="" className='form'>
      <p>Sifarişinizi izləmək üçün zəhmət olmasa, sifariş kodunu və faktura email-ni aşağıdakı xanalara daxil edin və "İzlə" düyməsinə klikləyin. Bu məlumatlar sizə qəbzdə və qəbul etməli olduğunuz təsdiqləmə emailində təqdim olunub.</p>
    </form>
      <div  className='izleM'>
        <div className='inputs'>
            <div className='input1'>
              <p>SİFARİŞ KODU</p>
              <input type="text"placeholder='Sifariş ilə bağlı aldığınız emaildə tapa bilərsiniz.' />
            </div>
            <div className='input1'>
              <p>SİFARİŞ EMAİL</p>
              <input type="text"placeholder='Sifariş zamanı istifadə etdiyin email.' />
            </div>
        </div>
        <button className='izle'>İZLƏ</button>
      </div>
  </Container>
  )
}

export default SifarislerinIzlenmesi