import React, { Component } from "react";
import Slider from "react-slick";
import css from './Slider.module.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll:5, 
    };
    return (
      <div className={css.slider }>
        <Slider {...settings} className='slider'>
          <div className={css.comboImg}>
            <img  src=" https://dodopizza-a.akamaihd.net/static/Img/Products/c940c5751e6d420e997d86c26a8ba16f_584x584.webp" alt="" width='200px' height='250px'/>
          </div>
          <div>
            <img className={css.comboImg} src=" https://dodopizza-a.akamaihd.net/static/Img/Products/c940c5751e6d420e997d86c26a8ba16f_584x584.webp" alt="" width='200px' height='250px'/>
          </div>
          <div>
            <img className={css.comboImg} src=" https://dodopizza-a.akamaihd.net/static/Img/Products/c940c5751e6d420e997d86c26a8ba16f_584x584.webp" alt="" width='200px' height='250px'/>
          </div>
          <div>
            <img className={css.comboImg} src=" https://dodopizza-a.akamaihd.net/static/Img/Products/c940c5751e6d420e997d86c26a8ba16f_584x584.webp" alt="" width='200px' height='250px'/>
          </div>
          <div>
            <img className={css.comboImg} src=" https://dodopizza-a.akamaihd.net/static/Img/Products/c940c5751e6d420e997d86c26a8ba16f_584x584.webp" alt="" width='200px' height='250px'/>
          </div>
          <div>
            <img className={css.comboImg} src=" https://dodopizza-a.akamaihd.net/static/Img/Products/c940c5751e6d420e997d86c26a8ba16f_584x584.webp" alt="" width='200px' height='250px'/>
          </div>
          <div>
            <img className={css.comboImg} src=" https://dodopizza-a.akamaihd.net/static/Img/Products/c940c5751e6d420e997d86c26a8ba16f_584x584.webp" alt="" width='200px' height='250px'/>
          </div>
          <div>
            <img className={css.comboImg} src=" https://dodopizza-a.akamaihd.net/static/Img/Products/c940c5751e6d420e997d86c26a8ba16f_584x584.webp" alt="" width='200px' height='250px'/>
          </div>
          <div>
            <img className={css.comboImg} src=" https://dodopizza-a.akamaihd.net/static/Img/Products/c940c5751e6d420e997d86c26a8ba16f_584x584.webp" alt="" width='200px' height='250px'/>
          </div>
          
          
          
        </Slider>
      </div>
    );
  }
}