import { Container } from 'react-bootstrap';
import './Main4.css';

function Main4() {
  return (
    <Container>
        <div style={{textAlign:"center", paddingBottom:"55px" }}>
            <div className='main3' style={{justifyContent: "space-around"}}>
                <hr style={{ borderBottom: "2px solid",}}/>
                <div className='center' style={{paddingTop:"55px"}} >
                    <div>
                        <h3>Onlayn corab sifarişi</h3>
                        <p>Rahat və rəsmi şəkildə onlayn sifariş mövcuddur.</p>
                    </div>
                    <div>
                        <h3>Bakı və Azərbaycan daxili çatdırılma</h3>
                        <p>Sifarişinizi Bakı daxilində 24 saata, Azərbaycan bölgələrinə isə 7 günə çatdırırıq.</p>
                    </div>
                    <div>
                        <h3>Pambıq corab</h3>
                        <p>Bütün corablar 80% pambıq sapdan toxunma texnikası ilə hazırlanır.</p>
                    </div>
                </div>
                <div className='center2'>
                    <div>
                        <h3>Hədiyyə və ya suvenir</h3>
                        <p>Özünüzə və ya yaxınlarınıza Azərbaycandan hədiyyə və ya suvenir kimi corab alın.</p>
                    </div>
                    <div>
                        <h3>Corabb. mağazası</h3>
                        <p>Bakı şəhərinin <a style={{color:"#fcb900"}}>mərkəzindəki mağazamızdan</a> istədiyiniz corab məhsulları əldə edə bilərsiniz.</p>
                    </div>
                    <div>
                        <h3>Partnyorlar</h3>
                        <p>Məhsullarımızı <a style={{color:"#fcb900"}}>ABAD Mərkəzləri, Ninka Cards, Stock, Handicraft, Soroka, Crazzy Gifts, Suri Miras</a> tərəfdaş mağazalardan da əldə edin.</p>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Main4