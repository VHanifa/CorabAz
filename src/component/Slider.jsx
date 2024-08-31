import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import sekil from './assets/slider.jpg'
import './Slider.css'

export default function Slider() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
    <div className="hide">

      <div ref={sliderRef} className="keen-slider">

        <div className='slider keen-slider__slide'>
          <img src={sekil} alt="" style={{ width: '100%' }} />
          <div className='name'>
            <h5>Biznes kolleksiya</h5>
            <p>4 cüt corab xüsusi qutuda</p>
            <button>Daha ətraflı</button>
          </div>
        </div>
        <div className='slider keen-slider__slide'>
          <img src={sekil} alt="" style={{ width: '100%' }} />
          <div className='name'>
            <h5>Biznes kolleksiya</h5>
            <p>4 cüt corab xüsusi qutuda</p>
            <button>Daha ətraflı</button>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}
