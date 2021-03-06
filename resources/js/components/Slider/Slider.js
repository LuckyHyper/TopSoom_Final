import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./Slider.css";

export default function Slider({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    setTimeout(nextSlide, 2000); // Change image every 2 second
    return (
        <section className="slider">
            <div className="slider-buttons">
                <FaArrowAltCircleLeft
                    className="left-arrow"
                    onClick={prevSlide}
                />
                <FaArrowAltCircleRight
                    className="right-arrow"
                    onClick={nextSlide}
                />
            </div>
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? "slide active" : "slide"}
                        key={index}
                    >
                        {index === current && (
                            <img
                                src={slide.image}
                                alt="shop image"
                                className="image"
                            />
                        )}
                    </div>
                );
            })}
        </section>
    );
}
