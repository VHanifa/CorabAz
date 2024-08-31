import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "./MainPage";
import QutuDesti from "./QutuDesti";
import RengliCorablar from "./RengliCorablar";
import QisaCorablar from "./QisaCorablar";
import Elaqe from "./Elaqe";
import Haqqımızda from "./Haqqımızda";
import SifarislerinIzlenmesi from "./SifarislerinIzlenmesi";
import VerilenSuallar from "./VerilenSuallar";


function App() {
  return (
  <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
          <Route index element={<MainPage/>} />
          <Route path="/qutu"  element={<QutuDesti/>} />
          <Route path="/renglicorab"  element={<RengliCorablar/>} />
          <Route path="/qisacorab"  element={<QisaCorablar/>} />
          <Route path="/elaqe"  element={<Elaqe/>} />
          <Route path="/haqqımızda"  element={<Haqqımızda/>} />
          <Route path="/sifarislerinizlenmesi"  element={<SifarislerinIzlenmesi/>} />
          <Route path="/teztezverilensuallar"  element={<VerilenSuallar/>} />
          </Route>
        </Routes>
      </BrowserRouter>
     
  </>
  
  );
}

export default App;
