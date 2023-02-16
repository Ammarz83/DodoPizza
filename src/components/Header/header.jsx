import React from 'react'
import css from './header.module.css'
import { Link } from 'react-router-dom'
import Button from '../Button/button'
import Slider from "../SliderCard/Slider";


function header() {
  return (
    <div className={css.wrapper + ' container'}>
        <div className={css.header}>
            <div className={css.topHeader}>
                <div className={css.leftTopHeader}>
                <Link to='/'>
                <span className={css.logo}>
                <img className={css.logoImg} alt="" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtu8y0CwT9vsdFkhLtbTzE5G4HTsTluOlCA&usqp=CAU'/>
                <h1>Dodo Pizza</h1>
                </span>
                </Link>
                <p>Доставка пиццы Бишкек <br />
                34 мин • ⭐
                </p>
                <p>
                0 (551) 550-550 <br />
                <span>Звонок по телефону</span> 
                </p>
                </div>
                <div className={css.rightTopHeader}>
                    <div>
                    <img src="" alt="" />
                    <p className={css.dodocoin}>Додокоины</p>
                    </div>
                    <div>
                        <button className={css.login}>Войти</button>
                    </div>
                </div>
                
            </div>
            <div className={css.bottomHeader}>
                <div className={css.leftBottomHeader}>
                    <a href="">Пицца</a>
                    <a href="">Комбо</a>
                    <a href="">Закуски</a>
                    <a href="">Десерты</a>
                    <a href="">Напитки</a>
                    <a href="">Другие товары</a>
                    <a href="">Контакты</a>
                    <a href="">О нас</a>
                    <a href=""> 🔴 Прямой эфир</a>
                </div>
                <div className={css.rightBottomHeader}>
                    <Button  title='Корзина' />
                    {/* <Button variant='empty' title='Корзина' /> */}
                </div>
            </div>
        </div>
        <div>
        </div>
        <Slider />
        <div>
            <h2>Часто саказывают</h2>
            <div className={css.usuals}>
                <div className={css.usual}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbUSqWDcmwxSX-t3oaQXhE9CB6WwrieyvC9g&usqp=CAU" alt="" />
                    <p>Pepperoni <br />
                    from 200com
                    </p>
                </div>
                <div className={css.usual}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbUSqWDcmwxSX-t3oaQXhE9CB6WwrieyvC9g&usqp=CAU" alt="" />
                    <p>
                    Pepperoni <br />
                    from 200com
                    </p>
                </div >
                <div className={css.usual}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbUSqWDcmwxSX-t3oaQXhE9CB6WwrieyvC9g&usqp=CAU" alt="" />
                    <p>
                    Pepperoni <br />
                    from 200com
                    </p>
                </div>
                <div className={css.usual}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbUSqWDcmwxSX-t3oaQXhE9CB6WwrieyvC9g&usqp=CAU" alt="" />
                    <p>
                    Pepperoni <br />
                    from 200com
                    </p>
                </div>
                <div className={css.usual}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbUSqWDcmwxSX-t3oaQXhE9CB6WwrieyvC9g&usqp=CAU" alt="" />
                    <p>
                    Pepperoni <br />
                    from 200com
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default header