import React from 'react'
import MainCenter from './component/MainCenter'
import Slider from './component/Slider'
import CardSlider from './component/CardSlider'
import QutuSlider from './component/QutuSlider'
import Main4 from './component/Main4'
import Qutu from './component/Qutu'

function MainPage() {
  return (
    <>
         <Slider />
      <MainCenter/>

      <CardSlider/>
      <Qutu/>
      <QutuSlider/>
      <Main4/>
    </>
  )
}

export default MainPage