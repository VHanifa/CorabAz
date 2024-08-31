import React, { useState } from 'react';
import { LiaShoppingBagSolid } from "react-icons/lia";
import './Header.css';
import { CiSearch } from "react-icons/ci";
import { Button, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { FaBars, FaFacebookF, FaInstagram, FaSearch, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Header() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(false);
  const [sebet, setSepet] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSepetMouseEnter = () => {
    setSepet(true);
  };

  const handleSepetMouseLeave = () => {
    setSepet(false);
  };

  return (
    <>
      <Navbar style={{ backgroundColor: "#f4f4f4", padding: '0' }} className="brank d-none d-md-block" >
        <div style={{  backgroundColor: "black" }}>
          <div className="containerPerson" style={{ padding: '0 10px',overflow:'hidden' }}>

            <div style={{ display: "flex", padding: '2px 0' }}>
              <Navbar.Brand style={{ display: 'flex', alignItems: 'center' }} >
                <FaWhatsapp className="icon" style={{ marginRight: '18px', color: "white" }} onClick={() => window.open("https://api.whatsapp.com/send?phone=PHONE_NUMBER", "_blank")} />
                <FaInstagram className="icon" style={{ marginRight: '18px', color: "white" }} onClick={() => window.open("https://www.instagram.com/corabb.az/", "_blank")} />
                <FaFacebookF className="icon" style={{ marginRight: '18px', color: "white" }} onClick={() => window.open("https://www.facebook.com/corabb.az/", "_blank")} />
                <FaXTwitter className="icon" style={{ color: "white" }} onClick={() => window.open("https://twitter.com/corabb_az", "_blank")} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav className="go">24 saat ərzində çatdırılması</Nav>
                </Nav>
                <Nav style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  <div className={`${search ? 'right' : 'left'}`} style={{ marginRight: '20px', position: 'absolute' }}>
                    <input type="text" />
                  </div>
                  <FaSearch
                    style={{ color: 'white' }}
                    onMouseEnter={() => setSearch(true)}
                    onMouseLeave={() => setSearch(false)}
                  />
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </div>
        <div className="containerPerson" style={{ display: "flex", flexDirection: "column" }} >

          <div className='flexim d-none d-md-flex' style={{ backgroundColor: "#f4f4f4" }}>
            <div className="corabb">
              <Link to="/"><img className='logo' src="https://corabb.az/wp-content/uploads/2021/11/corabb-logo.png" alt="" /></Link>
            </div>
            <div style={{ display: "flex", alignItems: "center", columnGap: "35px" }}>
              <div className='boxs'>
                <ul className='qutu'>
                  <li>
                    <Link style={{textDecoration: "none", color:"black"}} to="/qutu">Qutu dəstlər</Link>
                  </li>
                  <li>
                    <Link style={{textDecoration: "none", color:"black"}} to="/renglicorab">Rənglİ corablar</Link>
                  </li>
                  <li>
                    <Link style={{textDecoration: "none", color:"black"}} to="qisacorab">Qısa corablar</Link>
                  </li>
                  <li>
                    <Link style={{textDecoration: "none", color:"black"}} to="/elaqe">Əlaqə</Link>
                  </li>
                </ul>
                <div className="hr"></div>
                <ul className='qutu2'>
                  <li>
                  <Link style={{textDecoration: "none", color:"black"}} to="/haqqımızda">Haqqımızda</Link>
                  </li>
                  <li className='sifaris'>
                  <Link style={{textDecoration: "none", color:"black"}} to="sifarislerinizlenmesi">Şifarişlərin izlənilməsi</Link>
                  </li>
                  <li>
                  <Link style={{textDecoration: "none", color:"black"}} to="/teztezverilensuallar">Tez-tez verilən suallar</Link>
                  </li>
                </ul>
              </div>
              <div style={{ position: "relative" }}>
                <div className="bag" onMouseEnter={handleSepetMouseEnter} onMouseLeave={handleSepetMouseLeave}>
                  <LiaShoppingBagSolid className='sebet' />
                  <div className='dolu'>0</div>
                </div>
                <div className={`onemli ${sebet ? 'show' : 'notshow'}`} style={{ position: "absolute", border: "1px solid #ccc", background: "white", right: "0", width: '300px', padding: "26px 0 22px 0", textAlign: "center" }}>
                  <LiaShoppingBagSolid className='sebet2' />
                  <p className='bosdur'>Səbət boşdur</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Navbar>
      <div className="header-top">24 saat ərzində çatdırılması</div>
      <div className="mpbmenu">
        <Button onClick={handleShow} className="d-block d-md-none">
          <FaBars className="bar" />
        </Button>
        <div className="corabb0">
          <img className=' logos' src="https://corabb.az/wp-content/uploads/2021/11/corabb-logo.png" alt="" />
        </div>
        <div className="soltaraf">
          <CiSearch className="search" />
          <div className="sebetright">
            <LiaShoppingBagSolid className="sebet2" />
            <p>0</p>
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} className="offcanvas">
        <Offcanvas.Header closeButton>
          <Navbar.Brand href="#home" style={{ display: 'flex', alignItems: 'center', padding: "25px 0 0 0" }} >
            <FaWhatsapp className="icon" style={{ marginRight: '18px', color: "black" }} onClick={() => window.open("https://api.whatsapp.com/send?phone=PHONE_NUMBER", "_blank")} />
            <FaInstagram className="icon" style={{ marginRight: '18px', color: "black" }} onClick={() => window.open("https://www.instagram.com/corabb.az/", "_blank")} />
            <FaFacebookF className="icon" style={{ marginRight: '18px', color: "black" }} onClick={() => window.open("https://www.facebook.com/corabb.az/", "_blank")} />
            <FaXTwitter className="icon" style={{ color: "black" }} onClick={() => window.open("https://twitter.com/corabb_az", "_blank")} />
          </Navbar.Brand>
        </Offcanvas.Header>
        <hr />
        <Offcanvas.Body>

          <div className='boxs'>
            <ul className='qutu'>
              <li>Qutu dəstlər</li>
              <li>Rənglİ corablar</li>
              <li>Qısa corablar</li>
              <li>Əlaqə</li>
            </ul>
          </div>
          < hr />
          <div className="boxs2">
            <ul className='qutu2' >
              <li>Haqqımızda</li>
              <li className='sifaris'>Sifarişin izlənilməsi</li>
              <li>Tez-tez verilən suallar</li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
