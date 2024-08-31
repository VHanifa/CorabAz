import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./QutuSlider.css"
import { Card, Container } from "react-bootstrap"
import { data } from './box';

export default () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        slides: { perView: 4, spacing: 10 },
        breakpoints: {
            "(min-width: 768px)": {
                slides: { perView: 4, spacing: 5 },
            },
            "(max-width: 768px)": {
                slides: { perView: 3, spacing: 5 },
            }
        }
    })

    return (
        <Container>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    {data?.socks.map((item, index) => (
                        <div className='keen-slider__slide'>
                            <Card key={index} style={{ padding: 0, minWidth: "160px", border: "none" }}>
                                <Card.Img />
                                <Card.Body className="p-0">
                                    <img src={`/assets/img/${item.img}`} alt="" className="top" />
                                    <Card.Text className='text pe-1'>{item.text}
                                    </Card.Text>
                                    <p className='price'>{item.price}</p>
                                </Card.Body>
                            </Card>
                            
                        </div>
                        
                    ))}
                </div>
                <div className="div">

                <button className="btn2">Dəstlərə bax</button>
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </>
                )}
            </div>
            {loaded && instanceRef.current && (
                <div className="dots">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                        )
                    })}
                </div>
            )}
        </Container>
    )
}

function Arrow(props) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}
