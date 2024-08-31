import React from 'react'
import './Haqqımızda.css';

function Haqqımızda() {
  return (
    <div className='haqqimizda'>
      <div className='video'>
          <iframe 
          width="500" 
         
          src="https://www.youtube.com/embed/znzV9zkmouE?feature=oembed"
          title="Corabb. - Biznes corab kolleksiyası" 
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen></iframe>
        <div className='video2'>
          <h3>Biz fərqli düşündük ki, siz də fərqli görünəsiniz…</h3>
          <p>Xoş anlar, xoş hisslər paylaşdıqca çoxalır. Biz də yüksək keyfiyyətimizlə bir-birindən maraqlı dizayn konseptlər yaratdıq ki, həyatınıza fərqli bir rəng qataq. Rəngli corablarımız əhvalınızı yüksəldəcək və müsbət enerjinizi ətrafınıza ötürəcək.</p>
        </div>
      </div>
      <div className='dizayn'>
      <div className='corab3'>
        <h3>Corab dizaynı</h3>
        <p>Əsasən Azərbaycanın milli və tarixi dəyərlərinə, adət-ənənələrinə, duzlu və məzəli, həmçinin gündəmə uyğun mövzuları diqqətə alaraq, <a style={{color:"#fcb900"}}>müxtəlif dizaynlarla </a>ayağınızda olmağa çalışacağıq. </p>
      </div>
        <div className='video3'>
          <img src='/assets/img/azerbaycan-memarliq-kolleksiya-dest-qiz-qalasi-corabb-website-corab-moniken.jpg' alt="" /> 
          <figcaption className='caption'>Qız Qalası təsvirli corab</figcaption>
        </div>
      </div>
      <div className='dizayn'>
        <div className='video4'>
          <img src='/assets/img/corabb-haqqimizda.jpg' alt="" /> 
        </div>
        <div className='corab4'>
        <h3>Corabb.</h3>
        <p>Hər kəsin zövqünə və tərzinə uyğun yerli markaya çevrilmək və həyatınıza rəng qatmaq əsas hədəfimizdir. Azərbaycanın yerli markası olaraq, məhsullarımızın istehsalını da ölkəmizdə etmək əsas məqsədlərimizdən biridir.</p>
      </div>
      </div>
      <div className='dizayn1'>
        
        <div className='corab5'>
        <h3>Toxunma corab</h3>
        <p>Yerli dizayner və illüstratorlardan ibarət komandamızın hazırladığı dizayn konseptlər əsasında yüksək keyfiyyətdə istehsal etdiyimiz corabların tərkibi 80% pambıqdan ibarətdir.</p>
      </div>
      <div className='video4'>
          <img src='/assets/img/memarliq-qiz-qalasi-corabb-website-corab-toxunma.jpg' alt="" /> 
        </div>
      </div>
      
    </div>
  )
}

export default Haqqımızda